import type { GLCat, GLCatBuffer, GLCatProgram, GLCatTexture, GLCatTransformFeedback } from '@fms-cat/glcat-ts';
import { shaderchunkPost, shaderchunkPre, shaderchunkPreLines } from './shaderchunks';
import { BeatManager } from './BeatManager';
import { EventEmittable } from './utils/EventEmittable';
import { Pool } from './Pool';
import { applyMixins } from './utils/applyMixins';
import { lerp } from './utils/lerp';

interface WavenerdDeckProgram {
  program: GLCatProgram<WebGL2RenderingContext>;
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
  texture: GLCatTexture<WebGL2RenderingContext>;
  sampleRate: number;
  duration: number;
}

export const shaderFrag = `#version 300 es

void main() {
  discard;
}`;

export class WavenerdDeck {
  /**
   * Its host deck.
   * It's highly recommended to connect the node of the host deck into the node of this deck, to ensure the timing consistency.
   */
  public hostDeck?: WavenerdDeck;

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
   * Its buffer length.
   */
  private __bufferLength: number;
  public get bufferLength(): number {
    return this.__bufferLength;
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
   * Its bound `GLCat`.
   */
  private __glCat: GLCat<WebGL2RenderingContext>;
  public get glCat(): GLCat<WebGL2RenderingContext> {
    return this.__glCat;
  }

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

  private __bufferPool: Pool<AudioBuffer>;

  private __prevBufferSource: AudioBufferSourceNode | null = null;

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

  private __bufferOff: GLCatBuffer<WebGL2RenderingContext>;
  private __bufferTransformFeedbacks: [
    GLCatBuffer<WebGL2RenderingContext>,
    GLCatBuffer<WebGL2RenderingContext>
  ];
  private __transformFeedback: GLCatTransformFeedback<WebGL2RenderingContext>;

  private __program: WavenerdDeckProgram | null = null;
  private __programCue: WavenerdDeckProgram | null = null;
  private __programSwapTime: number = 0.0;

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
    glCat,
    audio,
    hostDeck,
    bufferLength,
    bpm,
  }: {
    glCat: GLCat<WebGL2RenderingContext>;
    audio: AudioContext;
    hostDeck?: WavenerdDeck;
    bufferLength?: number;
    bpm?: number;
  } ) {
    this.__bufferLength = bufferLength ?? 4096;

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

    // -- glCat ------------------------------------------------------------------------------------
    this.__glCat = glCat;
    const { gl } = glCat;

    const bufferOffArray = new Array( this.__bufferLength )
      .fill( 0 )
      .map( ( _, i ) => i );
    this.__bufferOff = glCat.createBuffer();
    this.__bufferOff.setVertexbuffer( new Float32Array( bufferOffArray ) );

    this.__bufferTransformFeedbacks = [
      glCat.createBuffer(),
      glCat.createBuffer(),
    ];
    this.__transformFeedback = glCat.createTransformFeedback();

    this.__bufferTransformFeedbacks[ 0 ].setVertexbuffer(
      this.__bufferLength * Float32Array.BYTES_PER_ELEMENT,
      gl.DYNAMIC_COPY
    );

    this.__bufferTransformFeedbacks[ 1 ].setVertexbuffer(
      this.__bufferLength * Float32Array.BYTES_PER_ELEMENT,
      gl.DYNAMIC_COPY
    );

    this.__transformFeedback.bindBuffer( 0, this.__bufferTransformFeedbacks[ 0 ] );
    this.__transformFeedback.bindBuffer( 1, this.__bufferTransformFeedbacks[ 1 ] );

    // -- audio ------------------------------------------------------------------------------------
    this.__audio = audio;
    this.__node = audio.createGain();

    this.__bufferPool = new Pool( [
      audio.createBuffer( 2, this.__bufferLength, audio.sampleRate ),
      audio.createBuffer( 2, this.__bufferLength, audio.sampleRate ),
    ] );
  }

  /**
   * Dispose this WavenerdDeck.
   */
  public dispose(): void {
    this.__setCueStatus( 'none' );
    this.__transformFeedback.dispose();
    this.__bufferTransformFeedbacks[ 0 ].dispose();
    this.__bufferTransformFeedbacks[ 1 ].dispose();
    if ( this.__program ) {
      this.__program.program.dispose( true );
    }
    if ( this.__programCue ) {
      this.__programCue.program.dispose( true );
    }
  }

  /**
   * Compile given shader code and cue the shader.
   */
  public async compile( code: string ): Promise<void> {
    this.__setCueStatus( 'compiling' );
    const program = await this.__glCat.lazyProgramAsync(
      shaderchunkPre + code + shaderchunkPost,
      shaderFrag,
      {
        transformFeedbackVaryings: [ 'outL', 'outR' ],
      },
    ).catch( ( e ) => {
      const error = this.__processErrorMessage( e );
      this.__lastError = error;
      this.__programCue = null;
      this.__setCueStatus( 'none' );
      this.__emit( 'error', { error } );
      throw new Error( error ?? undefined );
    } );

    const requiredSamples = new Set<string>();
    for ( const name of this.samples.keys() ) {
      if ( code.search( 'sample_' + name ) !== -1 ) {
        requiredSamples.add( name );
      }
    }

    this.__programCue = {
      program,
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

    const glCat = this.__glCat;
    const { gl } = glCat;
    const texture = this.__glCat.createTexture()!;
    texture.setTextureFromArray(
      width,
      height,
      buffer,
      {
        internalformat: gl.RGBA32F,
        format: gl.RGBA,
        type: gl.FLOAT,
      }
    );
    texture.textureFilter( gl.NEAREST );

    this.samples.set(
      name,
      {
        name,
        texture,
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
      this.__emit( 'deleteSample', { name } );
    }
  }

  public update(): void {
    const { sampleRate, __bufferLength: bufferLength, __audio: audio } = this;

    const genTime = audio.currentTime;
    this.beatManager.update( genTime );

    // should I process the next program?
    let beginNext = this.__cueStatus === 'applying'
      ? Math.floor( ( this.__programSwapTime - genTime ) * sampleRate )
      : Infinity;
    beginNext = Math.min( beginNext, bufferLength );

    if ( beginNext < 0 ) {
      this.__setCueStatus( 'none' );

      const prevProgram = this.__program;
      this.__program = this.__programCue;

      if ( prevProgram ) {
        prevProgram.program.dispose( true );
      }
      this.__programCue = null;

      beginNext = bufferLength;
    }

    const buffer = this.__bufferPool.next();

    if ( this.__program ) {
      this.__prepareBuffer( this.__program, buffer, 0, beginNext );
    }

    // process the next program??
    if ( beginNext < bufferLength ) {
      // render
      if ( this.__programCue ) {
        this.__prepareBuffer( this.__programCue, buffer, beginNext, bufferLength - beginNext );
      }
    }

    const bufferSource = audio.createBufferSource();
    bufferSource.buffer = buffer;
    bufferSource.connect( this.__node );

    const delay = audio.currentTime - genTime;
    this.__prevBufferSource?.stop( audio.currentTime );
    bufferSource.start( audio.currentTime, delay );

    this.__prevBufferSource = bufferSource;

    // emit an event
    this.__emit( 'update' );
  }

  private __prepareBuffer(
    program: WavenerdDeckProgram,
    buffer: AudioBuffer,
    first: number,
    count: number
  ): void {
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
    const { gl } = this.__glCat;

    // render
    this.params.forEach( ( param ) => {
      if ( param.factor <= 0.0 ) {
        param.value = param.target;
      } else {
        param.value = lerp( param.target, param.value, Math.exp( -param.factor * deltaTime ) );
      }

      program.program.uniform(
        'param_' + param.name,
        '4f',
        param.target,
        param.value,
        param.factor,
        0.0
      );
    } );

    this.samples.forEach( ( sample ) => {
      program.program.uniformTexture( 'sample_' + sample.name, sample.texture );
      program.program.uniform(
        'sample_' + sample.name + '_meta',
        '4f',
        sample.texture.width,
        sample.texture.height,
        sample.sampleRate,
        sample.duration
      );
    } );

    program.program.attribute( 'off', this.__bufferOff, 1 );
    program.program.uniform( 'bpm', '1f', this.bpm );
    program.program.uniform( '_deltaSample', '1f', 1.0 / sampleRate );
    program.program.uniform(
      'timeLength',
      '4f',
      beatSeconds,
      barSeconds,
      sixteenBarSeconds,
      1E16
    );
    program.program.uniform(
      '_timeHead',
      '4f',
      beat,
      bar,
      sixteenBar,
      time
    );

    this.__glCat.useProgram( program.program, () => {
      this.__glCat.bindTransformFeedback( this.__transformFeedback, () => {
        gl.enable( gl.RASTERIZER_DISCARD );
        gl.beginTransformFeedback( gl.POINTS );
        gl.drawArrays( gl.POINTS, first, count );
        gl.endTransformFeedback();
        gl.disable( gl.RASTERIZER_DISCARD );
      } );
    } );

    gl.flush();

    const outL = buffer.getChannelData( 0 );
    this.__glCat.bindVertexBuffer( this.__bufferTransformFeedbacks[ 0 ], () => {
      gl.getBufferSubData(
        gl.ARRAY_BUFFER,
        0,
        outL,
        first,
        count
      );
    } );

    const outR = buffer.getChannelData( 1 );
    this.__glCat.bindVertexBuffer( this.__bufferTransformFeedbacks[ 1 ], () => {
      gl.getBufferSubData(
        gl.ARRAY_BUFFER,
        0,
        outR,
        first,
        count
      );
    } );
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
