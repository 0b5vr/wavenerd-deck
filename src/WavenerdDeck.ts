import { BeatManager, BeatManagerUpdateEvent } from './BeatManager';
import type { GLCat, GLCatBuffer, GLCatFramebuffer, GLCatProgram, GLCatRenderbuffer, GLCatTexture } from '@fms-cat/glcat-ts';
import { shaderchunkPost, shaderchunkPre, shaderchunkPreLines } from './shaderchunks';
import { EventEmittable } from './utils/EventEmittable';
import { applyMixins } from './utils/applyMixins';

interface WavenerdDeckProgram {
  program: GLCatProgram<WebGL2RenderingContext>;
  code: string;
  requiredSamples: Set<string>;
}

interface WavenerdDeckSampleEntry {
  name: string;
  texture: GLCatTexture<WebGL2RenderingContext>;
  sampleRate: number;
  duration: number;
}

const vertQuad = `#version 300 es
in vec2 p;
void main() {
  gl_Position = vec4( p, 0.0, 1.0 );
}
`;

export class WavenerdDeck {
  /**
   * Threshold of time error, in seconds.
   */
  public timeErrorThreshold: number;

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
   * Its buffer size.
   */
  private __bufferSize: number;
  public get bufferSize(): number {
    return this.__bufferSize;
  }

  /**
   * Its chunk size.
   */
  private __chunkSize: number;
  public get chunkSize(): number {
    return this.__chunkSize;
  }

  private __chunkHead = 0;

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
   * Its current time.
   */
  private __time = 0;
  public get time(): number {
    if ( this.hostDeck ) {
      return this.hostDeck.time;
    }

    return this.__time;
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
  private __node: ScriptProcessorNode;
  public get node(): ScriptProcessorNode {
    return this.__node;
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
    if ( hostDeckBeatManager ) {
      return hostDeckBeatManager;
    }

    return this.__beatManager;
  }

  private __bufferQuad: GLCatBuffer<WebGL2RenderingContext>;
  private __renderbuffer: GLCatRenderbuffer<WebGL2RenderingContext>;
  private __framebuffer: GLCatFramebuffer<WebGL2RenderingContext>;
  private __program: WavenerdDeckProgram | null = null;
  private __programCue: WavenerdDeckProgram | null = null;
  private __pixelBuffer: Float32Array;

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
    bufferSize,
    chunkSize,
    bpm,
    timeErrorThreshold
  }: {
    glCat: GLCat<WebGL2RenderingContext>;
    audio: AudioContext;
    hostDeck?: WavenerdDeck;
    bufferSize?: number;
    chunkSize?: number;
    bpm?: number;
    timeErrorThreshold?: number;
  } ) {
    this.timeErrorThreshold = timeErrorThreshold ?? 0.01;
    this.__bufferSize = bufferSize ?? 2048;
    this.__chunkSize = chunkSize ?? 64;

    // -- host deck --------------------------------------------------------------------------------
    if ( hostDeck ) {
      this.hostDeck = hostDeck;
    }

    // -- beat manager -----------------------------------------------------------------------------
    this.__beatManager = new BeatManager();
    this.__beatManager.bpm = bpm ?? 140;
    this.__beatManager.on( 'changeBPM', ( { bpm } ) => {
      this.__chunkHead = 0;
      this.__emit( 'changeBPM', { bpm } );
    } );

    // -- glCat ------------------------------------------------------------------------------------
    this.__glCat = glCat;
    const { gl } = glCat;
    this.__bufferQuad = glCat.createBuffer()!;
    this.__bufferQuad.setVertexbuffer( new Float32Array( [ -1, -1, 1, -1, -1, 1, 1, 1 ] ) );
    this.__renderbuffer = glCat.createRenderbuffer()!;
    this.__renderbuffer.renderbufferStorage(
      this.__bufferSize / 2,
      this.__chunkSize,
      { format: gl.RGBA32F }
    );
    this.__framebuffer = glCat.createFramebuffer()!;
    this.__framebuffer.attachRenderbuffer(
      this.__renderbuffer,
      { attachment: gl.COLOR_ATTACHMENT0 }
    );
    this.__pixelBuffer = new Float32Array( this.__bufferSize * 2 * this.__chunkSize );

    // -- audio ------------------------------------------------------------------------------------
    this.__audio = audio;
    this.__node = audio.createScriptProcessor( this.__bufferSize, 2, 2 );
    this.__node.onaudioprocess = ( event ) => this.__handleProcess( event );
  }

  /**
   * Dispose this WavenerdDeck.
   */
  public dispose(): void {
    this.__setCueStatus( 'none' );
    this.__bufferQuad.dispose();
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
      vertQuad,
      shaderchunkPre + code + shaderchunkPost
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
    }
  }

  /**
   * Load a sample and store as a uniform texture.
   */
  public async loadSample( name: string, buffer: ArrayBuffer ): Promise<void> {
    this.__audio.decodeAudioData( buffer )
    .then( ( audioBuffer ) => {
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

      this.__samples.set(
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
    } );
  }

  /**
   * Delete a sample.
   */
  public deleteSample( name: string ): void {
    if ( this.__samples.has( name ) ) {
      this.__samples.delete( name );
      this.__emit( 'deleteSample', { name } );
    }
  }

  private __handleProcess( event: AudioProcessingEvent ): void {
    let time = this.time;
    if ( !this.hostDeck ) {
      time += this.__bufferSize / this.__audio.sampleRate;
      if ( this.timeErrorThreshold < Math.abs( time - event.playbackTime ) ) {
        time = event.playbackTime;
      }
    }
    this.__time = time;

    const beatManagerUpdateEvent = this.beatManager.update( time );

    const { bpm, bar } = beatManagerUpdateEvent;
    const barSeconds = BeatManager.CalcBarSeconds( bpm );

    const outL = event.outputBuffer.getChannelData( 0 );
    const outR = event.outputBuffer.getChannelData( 1 );

    // should I process the next program?
    const { sampleRate, __bufferSize: bufferSize } = this;
    const beginNext = this.__cueStatus === 'applying'
      ? Math.min( bufferSize, Math.floor( ( barSeconds - bar ) * sampleRate ) )
      : bufferSize;

    if ( this.__chunkHead === 0 ) {
      this.__prepareBuffer( beatManagerUpdateEvent );
    }

    // insert into its audio buffer
    for ( let i = 0; i < beginNext; i ++ ) {
      const chunkIndex = this.__chunkHead * this.__bufferSize * 2;

      outL[ i ] = this.__pixelBuffer[ chunkIndex + i * 2 + 0 ];
      outR[ i ] = this.__pixelBuffer[ chunkIndex + i * 2 + 1 ];
    }

    // process the next program??
    if ( beginNext !== bufferSize ) {
      this.__setCueStatus( 'none' );

      if ( this.__programCue ) {
        const prevProgram = this.__program;
        this.__program = this.__programCue;

        if ( prevProgram ) {
          prevProgram.program.dispose( true );
        }
        this.__programCue = null;

        // render
        this.__prepareBuffer( beatManagerUpdateEvent );
      }

      this.__chunkHead = 0;

      // insert into its audio buffer
      for ( let i = beginNext; i < bufferSize; i ++ ) {
        outL[ i ] = this.__pixelBuffer[ i * 2 + 0 ];
        outR[ i ] = this.__pixelBuffer[ i * 2 + 1 ];
      }
    }

    this.__chunkHead = ( this.__chunkHead + 1 ) % this.__chunkSize;

    // emit an event
    this.__emit( 'process' );
  }

  private __prepareBuffer( event: BeatManagerUpdateEvent ): void {
    const {
      time,
      beat,
      bar,
      sixteenBar,
      bpm
    } = event;
    const beatSeconds = BeatManager.CalcBeatSeconds( bpm );
    const barSeconds = BeatManager.CalcBarSeconds( bpm );
    const sixteenBarSeconds = BeatManager.CalcSixteenBarSeconds( bpm );
    const { sampleRate, __bufferSize: bufferSize, __chunkSize: chunkSize } = this;
    const { gl } = this.__glCat;

    // render
    if ( this.__program ) {
      this.samples.forEach( ( sample ) => {
        this.__program!.program.uniformTexture( 'sample_' + sample.name, sample.texture );
        this.__program!.program.uniform4f(
          'sample_' + sample.name + '_meta',
          sample.texture.width,
          sample.texture.height,
          sample.sampleRate,
          sample.duration
        );
      } );

      this.__program.program.attribute( 'p', this.__bufferQuad, 2 );
      this.__program.program.uniform1f( 'bpm', this.bpm );
      this.__program.program.uniform1f( '_deltaSample', 1.0 / sampleRate );
      this.__program.program.uniform1f( '_deltaChunk', this.__bufferSize / sampleRate );
      this.__program.program.uniform4f(
        'timeLength',
        beatSeconds,
        barSeconds,
        sixteenBarSeconds,
        1E16
      );
      this.__program.program.uniform4f(
        '_timeHead',
        beat,
        bar,
        sixteenBar,
        time
      );

      this.__glCat.useProgram( this.__program.program, () => {
        this.__glCat.bindFramebuffer( this.__framebuffer, () => {
          gl.viewport( 0, 0, this.__bufferSize / 2, this.__chunkSize );
          gl.blendFunc( this.__glCat.gl.ONE, this.__glCat.gl.ZERO );

          gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
        } );
      } );

      // read pixels
      gl.flush();

      this.__glCat.bindFramebuffer( this.__framebuffer, () => {
        gl.readBuffer( this.__glCat.gl.COLOR_ATTACHMENT0 );
        gl.readPixels(
          0, // x
          0, // y
          bufferSize / 2, // width
          chunkSize, // height
          this.__glCat.gl.RGBA, // format
          this.__glCat.gl.FLOAT, // type
          this.__pixelBuffer // dst
        );
      } );
    }
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
  process: void;
  changeCueStatus: { cueStatus: 'none' | 'compiling' | 'ready' | 'applying' };
  loadSample: { name: string; sampleRate: number; duration: number }
  deleteSample: { name: string };
  changeBPM: { bpm: number };
  error: { error: string | null };
}> {}
applyMixins( WavenerdDeck, [ EventEmittable ] );
