import { GL, GLCat, GLCatBuffer, GLCatFramebuffer, GLCatProgram, GLCatTexture } from '@fms-cat/glcat-ts';
import { shaderchunkPost, shaderchunkPre } from './shaderchunks';
import { BeatManager } from './BeatManager';
import { EventEmittable } from './utils/EventEmittable';
import { applyMixins } from './utils/applyMixins';

export interface WaveNerdProgram {
  program: GLCatProgram;
  code: string;
  requiredSamples: { [ name: string ]: true };
}

const vertQuad = `attribute vec2 p;
void main() {
  gl_Position = vec4( p, 0.0, 1.0 );
}
`;

export class WaveNerdDeck {
  /**
   * Its current cue status.
   * `'none'`: There is nothing in its current cue.
   * `'ready'`: There is a cue shader and is ready to be applied.
   * `'applying'`: There is a cue shader and is going to be applied in the next bar.
   */
  private __cueStatus: 'none' | 'ready' | 'applying' = 'none';
  public get cueStatus(): 'none' | 'ready' | 'applying' {
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
   * Its current bpm.
   */
  public get bpm(): number {
    return this.__beatManager.bpm;
  }
  public set bpm( value: number ) {
    this.__beatManager.bpm = value;
  }

  /**
   * Its current time.
   */
  private __time = 0;
  public get time(): number {
    let time = this.__time;
    time += ( Date.now() - this.__dateLastUpdated ) / 1000.0;
    return time;
  }

  /**
   * Its bound `GLCat`.
   */
  private __glCat: GLCat;
  public get glCat(): GLCat {
    return this.__glCat;
  }

  /**
   * Its last compile error happened in [[WaveNerdDeck.compile]].
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
  private __bufferQuad: GLCatBuffer;
  private __framebufferTexture: GLCatTexture;
  private __framebuffer: GLCatFramebuffer;
  private __program: WaveNerdProgram | null = null;
  private __programCue: WaveNerdProgram | null = null;
  private __dateLastUpdated = Date.now();
  private __pixelBuffer: Float32Array;
  private __samples: Array<{
    name: string,
    texture: GLCatTexture,
    sampleRate: number,
    duration: number
  }> = [];

  /**
   * Constructor of the WaveNerdDeck.
   */
  public constructor( { glCat, audio, bufferSize, bpm }: {
    glCat: GLCat;
    audio: AudioContext;
    bufferSize?: number;
    bpm?: number;
  } ) {
    this.__bufferSize = bufferSize ?? 2048;
    this.__glCat = glCat;
    this.__beatManager = new BeatManager();
    this.__beatManager.bpm = bpm ?? 140;
    this.__bufferQuad = this.__glCat.createBuffer()!;
    this.__bufferQuad.setVertexbuffer( new Float32Array( [ -1, -1, 1, -1, -1, 1, 1, 1 ] ) );
    this.__framebufferTexture = this.__glCat.createTexture()!;
    this.__framebufferTexture.setTextureFromFloatArray( this.__bufferSize / 2, 1, null, GL.RGBA );
    this.__framebuffer = this.__glCat.createFramebuffer()!;
    this.__framebuffer.attachTexture( this.__framebufferTexture );
    this.__pixelBuffer = new Float32Array( this.__bufferSize * 2 );
    this.__audio = audio;
    this.__node = audio.createScriptProcessor( this.__bufferSize, 2, 2 );
    this.__node.onaudioprocess = ( event ) => this.__handleProcess( event );
  }

  /**
   * Dispose this WaveNerdDeck.
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
    const program = await this.__glCat.lazyProgramAsync(
      vertQuad,
      shaderchunkPre + code + shaderchunkPost
    ).catch( ( e ) => {
      this.__lastError = e;
      this.__programCue = null;
      this.__setCueStatus( 'none' );
      this.__emit( 'error', { error: e } );
      throw e;
    } );

    const requiredSamples = this.__samples.reduce( ( accum, sample ) => {
      if ( code.search( sample.name ) !== -1 ) {
        accum[ sample.name ] = true;
      }
      return accum;
    }, {} as { [ name: string ]: true } );

    this.__programCue = {
      program,
      code,
      requiredSamples
    };
    this.__setCueStatus( 'ready' );
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

      const texture = this.__glCat.createTexture()!;
      texture.setTextureFromFloatArray( width, height, buffer, GL.RGBA );
      texture.textureFilter( GL.NEAREST );

      this.__samples.push( {
        name,
        texture,
        sampleRate: audioBuffer.sampleRate,
        duration: audioBuffer.duration
      } );

      if ( this.__program && this.__program.code.search( name ) ) {
        this.__program.requiredSamples[ name ] = true;
      }

      if ( this.__programCue && this.__programCue.code.search( name ) ) {
        this.__programCue.requiredSamples[ name ] = true;
      }
    } );
  }

  private __handleProcess( event: AudioProcessingEvent ): void {
    const deltaTime = this.bufferSize / this.sampleRate;
    this.__time = this.__time + deltaTime;
    this.__dateLastUpdated = Date.now();

    this.__beatManager.update( deltaTime );
    const { bar } = this.__beatManager;

    const outL = event.outputBuffer.getChannelData( 0 );
    const outR = event.outputBuffer.getChannelData( 1 );

    // render
    this.__render();

    // should I process the next program?
    const { sampleRate, __bufferSize: bufferSize } = this;
    const beginNext = Math.min( bufferSize, Math.floor( ( 1.0 - bar ) * sampleRate ) );

    // insert into its audio buffer
    for ( let i = 0; i < bufferSize; i ++ ) {
      outL[ i ] = this.__pixelBuffer[ i * 2 + 0 ];
      outR[ i ] = this.__pixelBuffer[ i * 2 + 1 ];
    }

    // process the next program??
    if ( this.__cueStatus === 'applying' && beginNext < bufferSize ) {
      this.__setCueStatus( 'none' );

      if ( this.__programCue ) {
        const prevProgram = this.__program;
        this.__program = this.__programCue;

        if ( prevProgram ) {
          prevProgram.program.dispose( true );
        }
        this.__programCue = null;

        // render
        this.__render();

        // insert into its audio buffer
        for ( let i = beginNext; i < bufferSize; i ++ ) {
          outL[ i ] = this.__pixelBuffer[ i * 2 + 0 ];
          outR[ i ] = this.__pixelBuffer[ i * 2 + 1 ];
        }
      }
    }
  }

  private __render(): void {
    const {
      beat,
      bar,
      sixteenBar,
      beatSeconds,
      barSeconds,
      sixteenBarSeconds
    } = this.__beatManager;
    const { gl } = this.__glCat;

    // render
    if ( this.__program ) {
      this.__samples.forEach( ( sample ) => {
        this.__program!.program.uniformTexture( sample.name, sample.texture );
        this.__program!.program.uniform4f(
          sample.name + '_meta',
          sample.texture.width,
          sample.texture.height,
          sample.sampleRate,
          sample.duration
        );
      } );

      this.__glCat.useProgram( this.__program.program );
      gl.viewport( 0, 0, this.__bufferSize / 2, 1 );
      gl.bindFramebuffer( gl.FRAMEBUFFER, this.__framebuffer.raw );
      gl.blendFunc( GL.ONE, GL.ZERO );
      gl.clear( GL.DEPTH_BUFFER_BIT | GL.COLOR_BUFFER_BIT );

      this.__program.program.attribute( 'p', this.__bufferQuad, 2 );
      this.__program.program.uniform1f( 'bpm', this.bpm );
      this.__program.program.uniform1f( '_deltaSample', 1.0 / this.sampleRate );
      this.__program.program.uniform4f(
        'timeLength',
        beatSeconds,
        barSeconds,
        sixteenBarSeconds,
        1E16
      );
      this.__program.program.uniform4f(
        '_timeHead',
        beat * beatSeconds,
        bar * barSeconds,
        sixteenBar * sixteenBarSeconds,
        this.__time
      );

      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }

    // read
    gl.readPixels(
      0, // x
      0, // y
      this.bufferSize / 2, // width
      1, // height
      GL.RGBA, // format
      GL.FLOAT, // type
      this.__pixelBuffer // dst
    );
  }

  private __setCueStatus( cueStatus: 'none' | 'ready' | 'applying' ): void {
    this.__cueStatus = cueStatus;
    this.__emit( 'changeCueStatus', { cueStatus } );
  }
}

export interface WaveNerdDeck extends EventEmittable<{
  changeCueStatus: { cueStatus: 'none' | 'ready' | 'applying' };
  error: { error: any };
}> {}
applyMixins( WaveNerdDeck, [ EventEmittable ] );
