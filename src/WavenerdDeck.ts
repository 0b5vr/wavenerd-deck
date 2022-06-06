import { BeatManager } from './BeatManager';
import { BufferReaderNode } from './BufferReaderNode';
import { EventEmittable } from './utils/EventEmittable';
import { Renderer } from './Renderer';
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

interface WavenerdDeckSampleEntry {
  type: 'sample';
  name: string;
  width: number;
  height: number;
  sampleRate: number;
  duration: number;
}

interface WavenerdDeckWavetableEntry {
  type: 'wavetable';
  name: string;
  width: number;
  height: number;
}

interface WavenerdDeckImageEntry {
  type: 'image';
  name: string;
  width: number;
  height: number;
}

type WavenerdDeckTextureEntry =
  | WavenerdDeckSampleEntry
  | WavenerdDeckWavetableEntry
  | WavenerdDeckImageEntry;

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
  public get cueStatus(): 'none' | 'compiling' | 'ready' | 'applying' {
    return this.__cueStatus;
  }

  /**
   * Blocks per a render.
   */
  private __blocksPerRender: number;
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
  private __programSwapTime: number;

  private __params = new Map<string, WavenerdDeckParamEntry>();
  private get params(): Map<string, WavenerdDeckParamEntry> {
    return this.__params;
  }

  private __textures = new Map<string, WavenerdDeckTextureEntry>();
  private get textures(): Map<string, WavenerdDeckTextureEntry> {
    if ( this.hostDeck ) {
      return this.hostDeck.textures;
    }

    return this.__textures;
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

    this.__program = null;
    this.__programCue = null;
    this.__programSwapTime = 0.0;

    // -- audio ------------------------------------------------------------------------------------
    this.__audio = audio;
    this.__node = audio.createGain();

    BufferReaderNode.addModule( audio ).then( () => {
      this.__bufferReaderNode = new BufferReaderNode( audio );
      this.__bufferReaderNode.connect( this.__node );
    } );

    this.__bufferWriteBlocks = 0;
  }

  /**
   * Dispose this WavenerdDeck.
   */
  public dispose(): void {
    this.__setCueStatus( 'none' );

    this.__renderer.dispose();

    this.__bufferReaderNode?.disconnect();
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

    for ( const texture of this.textures.values() ) {
      const textureName = `${ texture.type }_${ texture.name }`;
      if ( code.search( textureName ) !== -1 ) {
        requiredTextures.add( textureName );
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
  public async loadWavetable(
    name: string,
    inputBuffer: Float32Array,
  ): Promise<void> {
    const frames = inputBuffer.length / 2048;
    const buffer = new Float32Array( inputBuffer.length * 4 );

    for ( let i = 0; i < inputBuffer.length; i ++ ) {
      buffer[ i * 4 + 0 ] = inputBuffer[ i ];
    }

    const textureName = `wavetable_${ name }`;

    this.__renderer.uploadTexture( textureName, 2048, frames, buffer );

    this.textures.set(
      textureName,
      {
        type: 'wavetable',
        name,
        width: 2048,
        height: frames,
      }
    );

    if ( this.__program && this.__program.code.search( textureName ) ) {
      this.__program.requiredTextures.add( name );
    }

    if ( this.__programCue && this.__programCue.code.search( textureName ) ) {
      this.__programCue.requiredTextures.add( name );
    }

    this.__emit( 'loadWavetable', { name } );
  }

  /**
   * Delete a wavetable.
   */
  public deleteWavetable( name: string ): void {
    const textureName = `wavetable_${ name }`;

    if ( this.textures.has( textureName ) ) {
      this.textures.delete( textureName );

      this.__renderer.deleteTexture( textureName );

      this.__emit( 'deleteWavetable', { name } );
    }
  }

  /**
   * Load an image and store as a uniform texture.
   */
  public async loadImage(
    name: string,
    image: TexImageSource,
  ): Promise<void> {
    const textureName = `image_${ name }`;

    this.__renderer.uploadImageSource( textureName, image );

    this.textures.set(
      textureName,
      {
        type: 'image',
        name,
        width: image.width,
        height: image.height,
      }
    );

    if ( this.__program && this.__program.code.search( textureName ) ) {
      this.__program.requiredTextures.add( name );
    }

    if ( this.__programCue && this.__programCue.code.search( textureName ) ) {
      this.__programCue.requiredTextures.add( name );
    }

    this.__emit( 'loadImage', { name } );
  }

  /**
   * Delete an image.
   */
  public deleteImage( name: string ): void {
    const textureName = `image_${ name }`;

    if ( this.textures.has( textureName ) ) {
      this.textures.delete( textureName );

      this.__renderer.deleteTexture( textureName );

      this.__emit( 'deleteImage', { name } );
    }
  }

  /**
   * Load a sample and store as a uniform texture.
   */
  public async loadSample( name: string, inputBuffer: ArrayBuffer ): Promise<void> {
    const audioBuffer = await this.__audio.decodeAudioData( inputBuffer );

    const { sampleRate, duration } = audioBuffer;
    const frames = audioBuffer.length;
    const width = 2048;
    const lengthCeiled = Math.ceil( frames / 2048.0 );
    const height = lengthCeiled;

    const buffer = new Float32Array( width * height * 4 );
    const channels = audioBuffer.numberOfChannels;

    const dataL = audioBuffer.getChannelData( 0 );
    const dataR = audioBuffer.getChannelData( channels === 1 ? 0 : 1 );

    for ( let i = 0; i < frames; i ++ ) {
      buffer[ i * 4 + 0 ] = dataL[ i ];
      buffer[ i * 4 + 1 ] = dataR[ i ];
    }

    const textureName = `sample_${ name }`;

    this.__renderer.uploadTexture( textureName, width, height, buffer );

    this.textures.set(
      textureName,
      {
        type: 'sample',
        name,
        width,
        height,
        sampleRate,
        duration
      }
    );

    if ( this.__program && this.__program.code.search( textureName ) ) {
      this.__program.requiredTextures.add( name );
    }

    if ( this.__programCue && this.__programCue.code.search( textureName ) ) {
      this.__programCue.requiredTextures.add( name );
    }

    this.__emit( 'loadSample', { name, duration, sampleRate } );
  }

  /**
   * Delete a sample.
   */
  public deleteSample( name: string ): void {
    const textureName = `sample_${ name }`;

    if ( this.textures.has( textureName ) ) {
      this.textures.delete( textureName );

      this.__renderer.deleteTexture( textureName );

      this.__emit( 'deleteSample', { name } );
    }
  }

  public async update(): Promise<void> {
    const bufferReaderNode = this.__bufferReaderNode;
    if ( bufferReaderNode == null ) { return; }

    const { readBlocks } = bufferReaderNode;
    const { sampleRate, blocksPerRender, framesPerRender } = this;

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

    const genTime = BLOCK_SIZE * this.__bufferWriteBlocks / sampleRate;
    this.beatManager.update( genTime );

    // should I process the next program?
    let beginNext = this.__cueStatus === 'applying'
      ? Math.floor( ( this.__programSwapTime - genTime ) * sampleRate )
      : Infinity;
    beginNext = Math.min( beginNext, framesPerRender );

    if ( beginNext < 0 ) {
      this.__setCueStatus( 'none' );

      this.__renderer.applyCue();

      this.__program = this.__programCue;
      this.__programCue = null;

      beginNext = framesPerRender;
    }

    if ( this.__program ) {
      await this.__prepareBuffer( 0, beginNext );
    }

    // process the next program??
    if ( beginNext < framesPerRender && this.__programCue != null ) {
      this.__setCueStatus( 'none' );

      this.__renderer.applyCue();

      this.__program = this.__programCue;
      this.__programCue = null;

      await this.__prepareBuffer( beginNext, framesPerRender - beginNext );
    }

    this.__bufferWriteBlocks += this.blocksPerRender;

    // emit an event
    this.__emit( 'update' );
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
      const texture = this.textures.get( textureName );

      if ( texture != null ) {
        this.__renderer.uniformTexture(
          textureName,
          textureUnit,
        );
        textureUnit ++;

        const meta = (
          texture.type === 'sample'
            ? [
              texture.width,
              texture.height,
              texture.sampleRate,
              texture.duration,
            ]
            : [
              texture.width,
              texture.height,
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
