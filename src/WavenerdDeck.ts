import { BeatManager } from './BeatManager';
import { BufferReaderNode } from './BufferReaderNode';
import { EventEmittable } from './utils/EventEmittable';
import { Renderer } from './Renderer';
import { TextureStore } from './TextureStore';
import { applyMixins } from './utils/applyMixins';
import { lerp } from './utils/lerp';
import { shaderchunkPreLines } from './shaderchunks';

const BLOCK_SIZE = 128;

interface WavenerdDeckProgram {
  code: string;
  requiredTextures: Set<string>;
}

interface WavenerdDeckParamEntry {
  name: string;
  value: number;
  factor: number;
  target: number;
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
   * Blocks per a render.
   */
  private __blocksPerRender: number;

  /**
   * Blocks per a render.
   */
  public get blocksPerRender(): number {
    return this.__blocksPerRender;
  }

  /**
   * Frames per a render
   */
  public get framesPerRender(): number {
    return BLOCK_SIZE * this.__blocksPerRender;
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
  public set bpm( value: number ) {
    this.beatManager.bpm = value;
  }

  /**
   * Its last updated time.
   * Intended to be used for calculation of deltaTime inside (@link __prepareBuffer).
   */
  private __lastUpdatedTime: number;

  /**
   * Its renderer.
   */
  private __renderer: Renderer;

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
   * It is used to rewind the deck.
   */
  private __blockOffset: number;

  /**
   * Alias for the `audio.sampleRate` .
   */
  public get sampleRate(): number {
    return this.__audio.sampleRate;
  }

  private __beatManager: BeatManager;
  public get beatManager(): BeatManager {
    const hostDeckBeatManager = this.hostDeck?.beatManager;
    if ( hostDeckBeatManager ) {
      return hostDeckBeatManager;
    }

    return this.__beatManager;
  }

  private __program: WavenerdDeckProgram | null;
  private __programCue: WavenerdDeckProgram | null;
  private __programSwapTime: number | null;

  private __params = new Map<string, WavenerdDeckParamEntry>();
  private get params(): Map<string, WavenerdDeckParamEntry> {
    return this.__params;
  }

  private __selfTextureStore: TextureStore;
  private get __textureStore(): TextureStore {
    if ( this.hostDeck ) {
      return this.hostDeck.__textureStore;
    }

    return this.__selfTextureStore;
  }

  /**
   * Constructor of the WavenerdDeck.
   */
  public constructor( {
    gl,
    audio,
    hostDeck,
    latencyBlocks,
    blocksPerRender,
    bpm,
  }: {
    gl: WebGL2RenderingContext;
    audio: AudioContext;
    hostDeck?: WavenerdDeck;
    latencyBlocks?: number;
    blocksPerRender?: number;
    bpm?: number;
  } ) {
    this.__isPlaying = false;

    this.latencyBlocks = latencyBlocks ?? 16;
    this.__blocksPerRender = blocksPerRender ?? 16;

    // -- host deck --------------------------------------------------------------------------------
    if ( hostDeck ) {
      this.hostDeck = hostDeck;
    }

    // -- beat manager -----------------------------------------------------------------------------
    this.__beatManager = new BeatManager();
    this.__beatManager.bpm = bpm ?? 140;
    this.__beatManager.on( 'changeBPM', ( { bpm } ) => {
      this.__emit( 'changeBPM', { bpm } );
    } );

    this.__lastUpdatedTime = 0.0;

    // -- renderer ---------------------------------------------------------------------------------
    this.__renderer = new Renderer( gl, this.blocksPerRender );

    this.__selfTextureStore = new TextureStore( gl );

    this.__program = null;
    this.__programCue = null;
    this.__programSwapTime = null;

    // -- audio ------------------------------------------------------------------------------------
    this.__audio = audio;
    this.__node = audio.createGain();

    BufferReaderNode.addModule( audio ).then( () => {
      this.__bufferReaderNode = new BufferReaderNode( audio );
      this.__bufferReaderNode.connect( this.__node );
    } );

    this.__bufferWriteBlocks = 0;
    this.__blockOffset = 0;
  }

  /**
   * Dispose this WavenerdDeck.
   */
  public dispose(): void {
    this.__setCueStatus( 'none' );

    this.__renderer.dispose();
    this.__selfTextureStore.dispose();

    this.__bufferReaderNode?.disconnect();
  }

  /**
   * Play the deck.
   */
  public play(): void {
    this.__isPlaying = true;

    this.__emit( 'play' );
  }

  /**
   * Pause the deck.
   */
  public pause(): void {
    this.__isPlaying = false;

    this.__emit( 'pause' );
  }

  /**
   * Rewind the deck.
   */
  public rewind(): void {
    this.__lastUpdatedTime = 0.0;
    this.__blockOffset = this.__bufferWriteBlocks;

    this.__beatManager.reset();

    this.applyCueImmediately();
  }

  /**
   * Compile given shader code and cue the shader.
   */
  public async compile( code: string ): Promise<void> {
    this.__setCueStatus( 'compiling' );

    await this.__renderer.compile( code ).catch( ( e ) => {
      const error = this.__processErrorMessage( e );

      this.__programCue = null;

      this.__setCueStatus( 'none' );

      this.__emit( 'error', { error } );
      this.__lastError = error;

      throw new Error( error ?? undefined );
    } );

    const requiredTextures = new Set<string>();

    for ( const id of this.__textureStore.textureIds ) {
      if ( code.search( id ) !== -1 ) {
        requiredTextures.add( id );
      }
    }

    this.__programCue = {
      code,
      requiredTextures,
    };

    this.__setCueStatus( 'ready' );

    this.__emit( 'error', { error: null } );
    this.__lastError = null;
  }

  /**
   * Apply the cue shader after the bar ends.
   */
  public applyCue(): void {
    if ( this.__cueStatus === 'ready' ) {
      this.__setCueStatus( 'applying' );

      this.__programSwapTime =
        this.beatManager.time - this.beatManager.bar + this.beatManager.barSeconds;
    }
  }

  /**
   * Apply the cue shader immediately.
   */
  public applyCueImmediately(): void {
    if ( this.__programCue != null ) {
      this.__setCueStatus( 'none' );

      this.__renderer.applyCue();

      this.__program = this.__programCue;
      this.__programCue = null;
      this.__programSwapTime = null;
    }
  }

  /**
   * Set a uniform value.
   */
  public setParam( name: string, value: number, factor = 50.0 ): void {
    const param = this.params.get( name );
    if ( param ) {
      param.target = value;
      param.factor = factor;
    } else {
      this.params.set( name, { name, target: value, value, factor } );
    }

    this.__emit( 'setParam', { name, value, factor } );
  }

  /**
   * Load a x-y wavetable and store as a uniform texture.
   * The buffer have to be encoded in F32, 2048 samples per cycle.
   */
  public loadWavetable(
    name: string,
    inputBuffer: Float32Array,
  ): void {
    const id = `wavetable_${ name }`;
    this.__textureStore.loadWavetable( id, inputBuffer );

    this.__addRequiredTexture( id );

    this.__emit( 'loadWavetable', { name } );
  }

  /**
   * Delete a wavetable.
   */
  public deleteWavetable( name: string ): void {
    const isSuccess = this.__textureStore.delete( `wavetable_${ name }` );

    if ( isSuccess ) {
      this.__emit( 'deleteWavetable', { name } );
    }
  }

  /**
   * Load an image and store as a uniform texture.
   */
  public loadImage(
    name: string,
    image: TexImageSource,
  ): void {
    const id = `image_${ name }`;
    this.__textureStore.loadImage( id, image );

    this.__addRequiredTexture( id );

    this.__emit( 'loadImage', { name } );
  }

  /**
   * Delete an image.
   */
  public deleteImage( name: string ): void {
    const isSuccess = this.__textureStore.delete( `image_${ name }` );

    if ( isSuccess ) {
      this.__emit( 'deleteImage', { name } );
    }
  }

  /**
   * Load a sample and store as a uniform texture.
   */
  public async loadSample( name: string, inputBuffer: ArrayBuffer ): Promise<void> {
    const audioBuffer = await this.__audio.decodeAudioData( inputBuffer );

    const id = `sample_${ name }`;
    const { duration, sampleRate } = this.__textureStore.loadSample( id, audioBuffer );

    this.__addRequiredTexture( id );

    this.__emit( 'loadSample', { name, duration, sampleRate } );
  }

  /**
   * Delete a sample.
   */
  public deleteSample( name: string ): void {
    const isSuccess = this.__textureStore.delete( `success_${ name }` );

    if ( isSuccess ) {
      this.__emit( 'deleteSample', { name } );
    }
  }

  public async update(): Promise<void> {
    const bufferReaderNode = this.__bufferReaderNode;
    if ( bufferReaderNode == null ) { return; }

    const { readBlocks } = bufferReaderNode;
    const { sampleRate, blocksPerRender, framesPerRender } = this;

    this.__bufferReaderNode?.setActive( this.isPlaying );

    // -- early abort? -----------------------------------------------------------------------------
    if ( !this.isPlaying ) { return; }

    // -- choose a right write block ---------------------------------------------------------------
    const blockAhead = this.__bufferWriteBlocks - readBlocks;

    // we don't have to render this time
    if ( blockAhead > this.latencyBlocks ) {
      return;
    }

    // we're very behind
    if ( blockAhead < 0 ) {
      this.__bufferWriteBlocks = (
        Math.floor( readBlocks / blocksPerRender ) + 1
      ) * blocksPerRender;
    }

    const genTime = BLOCK_SIZE * ( this.__bufferWriteBlocks - this.__blockOffset ) / sampleRate;
    this.beatManager.update( genTime );

    // -- should I process the next program? -------------------------------------------------------
    let beginNext = this.__programSwapTime != null
      ? Math.floor( ( this.__programSwapTime - genTime ) * sampleRate )
      : Infinity;
    beginNext = Math.min( beginNext, framesPerRender );

    // -- swap the program from first --------------------------------------------------------------
    if ( beginNext < 0 ) {
      this.applyCueImmediately();

      beginNext = framesPerRender;
    }

    // -- render -----------------------------------------------------------------------------------
    if ( this.__program ) {
      await this.__prepareBuffer( 0, beginNext );
    }

    // -- render the next program from the mid of the block ----------------------------------------
    if ( beginNext < framesPerRender && this.__programCue != null ) {
      this.applyCueImmediately();

      await this.__prepareBuffer( beginNext, framesPerRender - beginNext );
    }

    // -- update write blocks ----------------------------------------------------------------------
    this.__bufferWriteBlocks += this.blocksPerRender;

    // -- emit an event ----------------------------------------------------------------------------
    this.__emit( 'update' );
  }

  private __addRequiredTexture( id: string ): void {
    if ( this.__program && this.__program.code.search( id ) ) {
      this.__program.requiredTextures.add( id );
    }

    if ( this.__programCue && this.__programCue.code.search( id ) ) {
      this.__programCue.requiredTextures.add( id );
    }
  }

  private async __prepareBuffer(
    first: number,
    count: number
  ): Promise<void> {
    const bufferReaderNode = this.__bufferReaderNode;
    if ( bufferReaderNode == null ) { return; }

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

    const delta = time - this.__lastUpdatedTime;
    this.__lastUpdatedTime = time;

    // render
    this.params.forEach( ( param ) => {
      if ( param.factor <= 0.0 ) {
        param.value = param.target;
      } else {
        param.value = lerp( param.target, param.value, Math.exp( -param.factor * delta ) );
      }

      this.__renderer.uniform4f(
        'param_' + param.name,
        param.target,
        param.value,
        param.factor,
        0.0
      );
    } );

    let textureUnit = 0;

    const { requiredTextures } = this.__program!;

    for ( const textureName of requiredTextures ) {
      const textureEntry = this.__textureStore.get( textureName );

      if ( textureEntry != null ) {
        this.__renderer.uniformTexture(
          textureName,
          textureUnit,
          textureEntry.texture,
        );
        textureUnit ++;

        const meta = (
          textureEntry.type === 'sample'
            ? [
              textureEntry.width,
              textureEntry.height,
              textureEntry.sampleRate,
              textureEntry.duration,
            ]
            : [
              textureEntry.width,
              textureEntry.height,
              0,
              0,
            ]
        ) as [ number, number, number, number ];

        this.__renderer.uniform4f(
          textureName + '_meta',
          ...meta,
        );
      }
    }

    this.__renderer.uniform1f( 'bpm', this.bpm );
    this.__renderer.uniform1f( '_deltaSample', 1.0 / sampleRate );
    this.__renderer.uniform4f(
      'timeLength',
      beatSeconds,
      barSeconds,
      sixteenBarSeconds,
      1E16
    );
    this.__renderer.uniform4f(
      '_timeHead',
      beat,
      bar,
      sixteenBar,
      time
    );

    const [ outL, outR ] = await this.__renderer.render( first, count );

    bufferReaderNode.write(
      0,
      this.__bufferWriteBlocks,
      first,
      outL.subarray( first, first + count ),
    );

    bufferReaderNode.write(
      1,
      this.__bufferWriteBlocks,
      first,
      outR.subarray( first, first + count ),
    );
  }

  private __setCueStatus( cueStatus: 'none' | 'compiling' | 'ready' | 'applying' ): void {
    this.__cueStatus = cueStatus;
    this.__emit( 'changeCueStatus', { cueStatus } );
  }

  private __processErrorMessage( error: any ): string | null {
    const str: string | undefined = error?.message ?? error;
    if ( !str ) { return null; }

    return str.replace( /ERROR: (\d+):(\d+)/g, ( match, ...args ) => {
      const line = parseInt( args[ 1 ] ) - shaderchunkPreLines + 1;
      return `ERROR: ${ args[ 0 ] }:${ line }`;
    } );
  }
}

export interface WavenerdDeck extends EventEmittable<{
  update: void;
  play: void;
  pause: void;
  changeCueStatus: { cueStatus: 'none' | 'compiling' | 'ready' | 'applying' };
  setParam: { name: string; value: number; factor: number };
  loadWavetable: { name: string };
  deleteWavetable: { name: string };
  loadImage: { name: string };
  deleteImage: { name: string };
  loadSample: { name: string; sampleRate: number; duration: number };
  deleteSample: { name: string };
  changeBPM: { bpm: number };
  error: { error: string | null };
}> {}
applyMixins( WavenerdDeck, [ EventEmittable ] );
