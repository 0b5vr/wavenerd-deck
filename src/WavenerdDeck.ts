import { Renderer } from './renderer/Renderer';
import { BeatManager } from './BeatManager';
import { BufferReaderNode } from './BufferReaderNode';
import { EventEmittable } from './utils/EventEmittable';
import { TextureStore } from './TextureStore';
import { applyMixins } from './utils/applyMixins';
import { shaderchunkPreLines } from './renderer/shaderchunks';
import { WavenerdDeckParam } from './WavenerdDeckParam';
import { BLOCKS_PER_RENDER, BLOCK_SIZE, FRAMES_PER_RENDER, POOL_SIZE } from './constants';
import { RenderUniforms } from './renderer/RenderUniforms';

interface WavenerdDeckProgram {
  code: string;
  requiredTextures: Set<string>;
}

export class WavenerdDeck {
  /**
   * Its host deck.
   * It's highly recommended to connect the node of the host deck into the node of this deck, to ensure the timing consistency.
   */
  public hostDeck?: WavenerdDeck;

  /**
   * The count of latency blocks.
   * Block == 128 samples.
   * Lower == less latency.
   */
  public latencyBlocks: number;

  /**
   * Its current cue status.
   * `'none'`: There is nothing in its current cue.
   * `'ready'`: There is a cue shader and is ready to be applied.
   * `'applying'`: There is a cue shader and is going to be applied in the next bar.
   */
  private __cueStatus: 'none' | 'compiling' | 'ready' | 'applying' = 'none';

  /**
   * Its current cue status.
   * `'none'`: There is nothing in its current cue.
   * `'ready'`: There is a cue shader and is ready to be applied.
   * `'applying'`: There is a cue shader and is going to be applied in the next bar.
   */
  public get cueStatus(): 'none' | 'compiling' | 'ready' | 'applying' {
    return this.__cueStatus;
  }

  /**
   * Whether the wavenerd deck is playing or not.
   */
  private __isPlaying: boolean;

  /**
   * Whether the wavenerd deck is playing or not.
   */
  public get isPlaying(): boolean {
    return this.hostDeck?.__isPlaying ?? this.__isPlaying;
  }

  /**
   * Its current bpm.
   */
  public get bpm(): number {
    return this.beatManager.bpm;
  }

  public set bpm(value: number) {
    this.beatManager.bpm = value;
  }

  /**
   * Its renderer.
   */
  private __renderer: Renderer;

  /**
   * Index for the transform feedback pool in the renderer.
   */
  private __tfIndex: number;

  /**
   * Its last compile error happened in [[WavenerdDeck.compile]].
   */
  private __lastError: any;
  public get lastError(): any {
    return this.__lastError;
  }

  /**
   * Its binded `AudioContext`.
   */
  private __audio: AudioContext;
  public get audio(): AudioContext {
    return this.__audio;
  }

  /**
   * Its node of the AudioContext.
   */
  private __node: GainNode;
  public get node(): GainNode {
    return this.__node;
  }

  private __bufferReaderNode?: BufferReaderNode;
  private __bufferWriteBlocks: number;

  /**
   * Offset of the block compared to {@link __bufferWriteBlocks} in terms of time.
   * It is used to play, pause and rewind the deck.
   */
  private __blockOffset: number;
  public get blockOffset(): number {
    return this.hostDeck?.__blockOffset ?? this.__blockOffset;
  }

  /**
   * Alias for the `audio.sampleRate` .
   */
  public get sampleRate(): number {
    return this.__audio.sampleRate;
  }

  private __beatManager: BeatManager;
  public get beatManager(): BeatManager {
    const hostDeckBeatManager = this.hostDeck?.beatManager;
    if (hostDeckBeatManager) {
      return hostDeckBeatManager;
    }

    return this.__beatManager;
  }

  private __program: WavenerdDeckProgram | null;
  private __programCue: WavenerdDeckProgram | null;
  private __programSwapTime: number | null;

  private __params = new Map<string, WavenerdDeckParam>();

  private __textureStore: TextureStore;

  /**
   * Constructor of the WavenerdDeck.
   */
  public constructor({
    gl,
    audio,
    hostDeck,
    latencyBlocks,
    bpm,
  }: {
    gl: WebGL2RenderingContext;
    audio: AudioContext;
    hostDeck?: WavenerdDeck;
    latencyBlocks?: number;
    bpm?: number;
  }) {
    this.__isPlaying = false;

    this.latencyBlocks = latencyBlocks ?? 16;

    // -- host deck --------------------------------------------------------------------------------
    if (hostDeck) {
      this.hostDeck = hostDeck;
    }

    // -- beat manager -----------------------------------------------------------------------------
    this.__beatManager = new BeatManager();
    this.__beatManager.bpm = bpm ?? 140;
    this.__beatManager.on('changeBPM', ({ bpm }) => {
      this.__emit('changeBPM', { bpm });
    });

    // TODO: temporary solution
    if (hostDeck) {
      hostDeck.on('rewind', () => {
        this.rewind();
      });
    }

    // -- renderer ---------------------------------------------------------------------------------
    this.__renderer = new Renderer(gl);
    this.__tfIndex = 0;

    this.__textureStore = new TextureStore();

    // Listen for texture events from the TextureStore
    this.__textureStore.on('load', ({ id, entry }) => {
      this.__renderer.uploadTexture(id, entry);
    });

    this.__textureStore.on('delete', ({ id }) => {
      this.__renderer.deleteTexture(id);
    });

    this.__textureStore.on('dispose', () => {
      this.__renderer.clearTextures();
    });

    this.__program = null;
    this.__programCue = null;
    this.__programSwapTime = null;

    // -- audio ------------------------------------------------------------------------------------
    this.__audio = audio;
    this.__node = audio.createGain();

    BufferReaderNode.addModule(audio).then(() => {
      this.__bufferReaderNode = new BufferReaderNode(audio);
      this.__bufferReaderNode.connect(this.__node);
    });

    this.__bufferWriteBlocks = 0;
    this.__blockOffset = 0;
  }

  /**
   * Dispose this WavenerdDeck.
   */
  public dispose(): void {
    this.__setCueStatus('none');

    this.__renderer.dispose();
    this.__textureStore.dispose();

    this.__bufferReaderNode?.disconnect();
  }

  /**
   * Play the deck.
   */
  public play(): void {
    if (this.__isPlaying) { return; }

    this.__isPlaying = true;
    const readBlocks = this.__bufferReaderNode?.readBlocks ?? 0;
    this.__blockOffset = readBlocks - this.__blockOffset;

    this.__emit('play');
  }

  /**
   * Pause the deck.
   */
  public pause(): void {
    if (!this.__isPlaying) { return; }

    this.__isPlaying = false;
    const readBlocks = this.__bufferReaderNode?.readBlocks ?? 0;
    this.__blockOffset = readBlocks - this.__blockOffset;

    this.__emit('pause');
  }

  /**
   * Rewind the deck.
   */
  public rewind(): void {
    this.__blockOffset = this.__bufferWriteBlocks;

    this.__beatManager.reset();

    this.applyCueImmediately();

    this.__emit('rewind');
  }

  /**
   * Compile given shader code and cue the shader.
   */
  public async compile(code: string): Promise<void> {
    this.__setCueStatus('compiling');

    await this.__renderer.compile(code).catch((e) => {
      const error = this.__processErrorMessage(e);

      this.__programCue = null;

      this.__setCueStatus('none');

      this.__emit('error', { error });
      this.__lastError = error;

      throw new Error(error ?? undefined);
    });

    const requiredTextures = new Set<string>();

    for (const id of this.__textureStore.textureIds) {
      if (code.search(id) !== -1) {
        requiredTextures.add(id);
      }
    }

    this.__programCue = {
      code,
      requiredTextures,
    };

    this.__setCueStatus('ready');

    this.__emit('error', { error: null });
    this.__lastError = null;
  }

  /**
   * Apply the cue shader after the bar ends.
   */
  public applyCue(): void {
    if (this.__cueStatus === 'ready') {
      this.__setCueStatus('applying');

      this.__programSwapTime
        = this.beatManager.time - this.beatManager.bar + this.beatManager.barSeconds;
    }
  }

  /**
   * Apply the cue shader immediately.
   */
  public applyCueImmediately(): void {
    if (this.__programCue != null) {
      this.__setCueStatus('none');

      this.__renderer.applyCue();

      this.__program = this.__programCue;
      this.__programCue = null;
      this.__programSwapTime = null;
    }
  }

  /**
   * Set a uniform value.
   */
  public setParam(name: string, value: number): void {
    const param = this.__params.get(name);
    if (param) {
      param.value = value;
    } else {
      this.__params.set(name, new WavenerdDeckParam(value));
    }

    this.__emit('setParam', { name, value });
  }

  /**
   * Load a x-y wavetable and store as a uniform texture.
   * The buffer have to be encoded in F32, 2048 samples per cycle.
   */
  public loadWavetable(
    name: string,
    inputBuffer: Float32Array,
  ): void {
    const id = `wavetable_${name}`;
    this.__textureStore.loadWavetable(id, inputBuffer);

    this.__addRequiredTexture(id);

    this.__emit('loadWavetable', { name });
  }

  /**
   * Delete a wavetable.
   */
  public deleteWavetable(name: string): void {
    const isSuccess = this.__textureStore.delete(`wavetable_${name}`);

    if (isSuccess) {
      this.__emit('deleteWavetable', { name });
    }
  }

  /**
   * Load an image and store as a uniform texture.
   */
  public loadImage(
    name: string,
    image: HTMLImageElement,
  ): void {
    const id = `image_${name}`;
    this.__textureStore.loadImage(id, image);

    this.__addRequiredTexture(id);

    this.__emit('loadImage', { name });
  }

  /**
   * Delete an image.
   */
  public deleteImage(name: string): void {
    const isSuccess = this.__textureStore.delete(`image_${name}`);

    if (isSuccess) {
      this.__emit('deleteImage', { name });
    }
  }

  /**
   * Load a sample and store as a uniform texture.
   */
  public async loadSample(name: string, inputBuffer: ArrayBuffer): Promise<void> {
    const audioBuffer = await this.__audio.decodeAudioData(inputBuffer);

    const id = `sample_${name}`;
    this.__textureStore.loadSample(id, audioBuffer);

    this.__addRequiredTexture(id);

    const { duration, sampleRate } = audioBuffer; // is it really needed?
    this.__emit('loadSample', { name, duration, sampleRate });
  }

  /**
   * Delete a sample.
   */
  public deleteSample(name: string): void {
    const isSuccess = this.__textureStore.delete(`success_${name}`);

    if (isSuccess) {
      this.__emit('deleteSample', { name });
    }
  }

  public async update(): Promise<void> {
    const bufferReaderNode = this.__bufferReaderNode;
    if (bufferReaderNode == null) { return; }

    const { readBlocks } = bufferReaderNode;
    const { sampleRate } = this;

    this.__bufferReaderNode?.setActive(this.isPlaying);

    // -- early abort? -----------------------------------------------------------------------------
    if (!this.isPlaying) { return; }

    // -- choose a right write block ---------------------------------------------------------------
    const blockAhead = this.__bufferWriteBlocks - readBlocks;

    // we don't have to render this time
    if (blockAhead > this.latencyBlocks) {
      return;
    }

    // we're very behind
    if (blockAhead < 0) {
      this.__bufferWriteBlocks = (
        Math.floor(readBlocks / BLOCKS_PER_RENDER) + 1
      ) * BLOCKS_PER_RENDER;
    }

    const genTime = BLOCK_SIZE * (this.__bufferWriteBlocks - this.blockOffset) / sampleRate;

    // -- update stuff -----------------------------------------------------------------------------
    this.beatManager.update(genTime);
    this.__updateParams();

    // -- should I process the next program? -------------------------------------------------------
    let beginNext = this.__programSwapTime != null
      ? Math.floor((this.__programSwapTime - genTime) * sampleRate)
      : FRAMES_PER_RENDER;
    beginNext = Math.min(beginNext, FRAMES_PER_RENDER);

    // -- swap the program from first --------------------------------------------------------------
    if (beginNext < 0) {
      this.applyCueImmediately();

      beginNext = FRAMES_PER_RENDER;
    }

    // -- render -----------------------------------------------------------------------------------
    const tfIndex = this.__tfIndex = (this.__tfIndex + 1) % POOL_SIZE;

    if (this.__program) {
      const uniforms = this.__collectUniforms();
      this.__renderer.render(tfIndex, 0, beginNext, uniforms);
    }

    // render the next program from the mid of the block
    if (beginNext < FRAMES_PER_RENDER && this.__programCue != null) {
      this.applyCueImmediately();

      const uniforms = this.__collectUniforms();
      this.__renderer.render(tfIndex, beginNext, FRAMES_PER_RENDER - beginNext, uniforms);
    }

    // -- read buffer + update write blocks --------------------------------------------------------
    await this.__readBuffer(tfIndex, this.__bufferWriteBlocks);
    this.__bufferWriteBlocks += BLOCKS_PER_RENDER;

    // -- emit an event ----------------------------------------------------------------------------
    this.__emit('update');
  }

  private __addRequiredTexture(id: string): void {
    if (this.__program && this.__program.code.search(id)) {
      this.__program.requiredTextures.add(id);
    }

    if (this.__programCue && this.__programCue.code.search(id)) {
      this.__programCue.requiredTextures.add(id);
    }
  }

  private __updateParams(): void {
    for (const param of this.__params.values()) {
      param.update();
    }
  }

  private __collectUniforms(): RenderUniforms {
    const {
      time,
      beatSeconds,
      barSeconds,
      sixteenBarSeconds,
      beat,
      bar,
      sixteenBar,
    } = this.beatManager;
    const { sampleRate } = this;

    const uniforms: RenderUniforms = {
      uniform1f: [],
      uniform4f: [],
      uniformTexture: [],
    };

    // -- common -----------------------------------------------------------------------------------
    uniforms.uniform1f.push(
      { name: 'bpm', value: this.bpm },
      { name: '_deltaSample', value: 1.0 / sampleRate },
      { name: '_framesPerRender', value: FRAMES_PER_RENDER },
    );

    uniforms.uniform4f.push(
      { name: 'timeLength', value: [beatSeconds, barSeconds, sixteenBarSeconds, 1E16] },
      { name: '_timeHead', value: [beat, bar, sixteenBar, time] },
    );

    // -- params -----------------------------------------------------------------------------------
    for (const [name, param] of this.__params) {
      uniforms.uniform4f.push({
        name: 'param_' + name,
        value: [param.y0, param.y1, param.y2, param.y3],
      });
    }

    // -- textures ---------------------------------------------------------------------------------
    let textureUnit = 0;
    const { requiredTextures } = this.__program!;

    for (const textureName of requiredTextures) {
      const textureEntry = this.__textureStore.get(textureName);

      if (textureEntry != null) {
        uniforms.uniformTexture.push({
          name: textureName,
          unit: textureUnit,
          textureId: textureName,
        });

        const meta = textureEntry.meta;
        uniforms.uniform4f.push({
          name: textureName + '_meta',
          value: [meta[0], meta[1], meta[2], meta[3]],
        });

        textureUnit++;
      }
    }

    return uniforms;
  }

  private async __readBuffer(tfIndex: number, bufferWriteBlocks: number): Promise<void> {
    const bufferReaderNode = this.__bufferReaderNode;
    if (bufferReaderNode == null) { return; }

    const dstArrays = await this.__renderer.readBuffer(tfIndex);

    bufferReaderNode.write(
      0,
      bufferWriteBlocks,
      0,
      dstArrays[0].subarray(0, FRAMES_PER_RENDER),
    );

    bufferReaderNode.write(
      1,
      bufferWriteBlocks,
      0,
      dstArrays[1].subarray(0, FRAMES_PER_RENDER),
    );
  }

  private __setCueStatus(cueStatus: 'none' | 'compiling' | 'ready' | 'applying'): void {
    this.__cueStatus = cueStatus;
    this.__emit('changeCueStatus', { cueStatus });
  }

  private __processErrorMessage(error: any): string | null {
    const str: string | undefined = error?.message ?? error;
    if (!str) { return null; }

    return str.replace(/ERROR: (\d+):(\d+)/g, (match, ...args) => {
      const line = parseInt(args[1]) - shaderchunkPreLines + 1;
      return `ERROR: ${args[0]}:${line}`;
    });
  }
}

export interface WavenerdDeck extends EventEmittable<{
  update: void;
  play: void;
  pause: void;
  rewind: void;
  changeCueStatus: { cueStatus: 'none' | 'compiling' | 'ready' | 'applying' };
  setParam: { name: string; value: number };
  loadWavetable: { name: string };
  deleteWavetable: { name: string };
  loadImage: { name: string };
  deleteImage: { name: string };
  loadSample: { name: string; sampleRate: number; duration: number };
  deleteSample: { name: string };
  changeBPM: { bpm: number };
  error: { error: string | null };
}> {}
applyMixins(WavenerdDeck, [EventEmittable]);
