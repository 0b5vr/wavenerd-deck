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
  requiredSamples: Set<string>;
}

interface WavenerdDeckParamEntry {
  name: string;
  value: number;
  factor: number;
  target: number;
}

interface WavenerdDeckSampleEntry {
  name: string;
  width: number;
  height: number;
  sampleRate: number;
  duration: number;
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

  private __samples = new Map<string, WavenerdDeckSampleEntry>();
  private get samples(): Map<string, WavenerdDeckSampleEntry> {
    if ( this.hostDeck ) {
      return this.hostDeck.samples;
    }

    return this.__samples;
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

    const requiredSamples = new Set<string>();
    for ( const name of this.samples.keys() ) {
      if ( code.search( 'sample_' + name ) !== -1 ) {
        requiredSamples.add( name );
      }
    }

    this.__programCue = {
      code,
      requiredSamples
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

    this.__renderer.uploadTexture( name, width, height, buffer );

    this.samples.set(
      name,
      {
        name,
        width,
        height,
        sampleRate,
        duration
      }
    );

    if ( this.__program && this.__program.code.search( 'sample_' + name ) ) {
      this.__program.requiredSamples.add( name );
    }

    if ( this.__programCue && this.__programCue.code.search( 'sample_' + name ) ) {
      this.__programCue.requiredSamples.add( name );
    }

    this.__emit( 'loadSample', { name, duration, sampleRate } );
  }

  /**
   * Delete a sample.
   */
  public deleteSample( name: string ): void {
    if ( this.samples.has( name ) ) {
      this.samples.delete( name );

      this.__renderer.deleteTexture( name );

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
      deltaTime,
    } = this.beatManager;
    const { sampleRate } = this;

    // render
    this.params.forEach( ( param ) => {
      if ( param.factor <= 0.0 ) {
        param.value = param.target;
      } else {
        param.value = lerp( param.target, param.value, Math.exp( -param.factor * deltaTime ) );
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
    this.samples.forEach( ( sample ) => {
      this.__renderer.uniformTexture( 'sample_' + sample.name, sample.name, textureUnit );
      textureUnit ++;

      this.__renderer.uniform4f(
        'sample_' + sample.name + '_meta',
        sample.width,
        sample.height,
        sample.sampleRate,
        sample.duration
      );
    } );

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
  loadSample: { name: string; sampleRate: number; duration: number };
  setParam: { name: string; value: number; factor: number };
  deleteSample: { name: string };
  changeBPM: { bpm: number };
  error: { error: string | null };
}> {}
applyMixins( WavenerdDeck, [ EventEmittable ] );
