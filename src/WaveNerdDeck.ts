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
  private __bufferSize: number;
  private __beatManager: BeatManager;
  private __audio: AudioContext;
  private __node: ScriptProcessorNode;
  private __glCat: GLCat;
  private __bufferQuad: GLCatBuffer;
  private __framebufferTexture: GLCatTexture;
  private __framebuffer: GLCatFramebuffer;
  private __program: WaveNerdProgram | null = null;
  private __programCue: WaveNerdProgram | null = null;
  private __settingCue = false;
  private __time = 0;
  private __dateLastUpdated = Date.now();
  private __pixelBuffer: Float32Array;
  private __lastError: any;
  private __samples: Array<{
    name: string,
    texture: GLCatTexture,
    sampleRate: number,
    duration: number
  }> = [];

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
  public get time(): number {
    let time = this.__time;
    time += ( Date.now() - this.__dateLastUpdated ) / 1000.0;
    return time;
  }

  /**
   * Its binded `GLCat`.
   */
  public get glCat(): GLCat {
    return this.__glCat;
  }

  /**
   * Its last compile error happened in [[WaveNerdDeck.compile]].
   */
  public get lastError(): any {
    return this.__lastError;
  }

  /**
   * Its buffer size.
   */
  public get bufferSize(): number {
    return this.__bufferSize;
  }

  /**
   * Its binded `AudioContext`.
   */
  public get audio(): AudioContext {
    return this.__audio;
  }

  /**
   * Its node of the AudioContext.
   */
  public get node(): ScriptProcessorNode {
    return this.__node;
  }

  /**
   * Alias for the `audio.sampleRate` .
   */
  public get sampleRate(): number {
    return this.__audio.sampleRate;
  }

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
    this.__framebufferTexture.setTextureFromFloatArray( this.__bufferSize / 4, 2, null, GL.RGBA );
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
    this.__emit( 'readyCue' );
    this.__lastError = null;
  }

  /**
   * Apply the cue shader after the bar ends.
   */
  public setCue(): void {
    if ( this.__programCue ) {
      this.__settingCue = true;
      this.__emit( 'setCue' );
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
      const height = lengthCeiled * 2;

      const buffer = new Float32Array( width * height );
      const channels = audioBuffer.numberOfChannels;
      buffer.set( audioBuffer.getChannelData( 0 ), 0 );
      buffer.set( audioBuffer.getChannelData( channels === 1 ? 0 : 1 ), width * lengthCeiled );

      const texture = this.__glCat.createTexture()!;
      texture.setTextureFromFloatArray( width, height, buffer, GL.LUMINANCE );
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
    outL.set( this.__pixelBuffer.slice( 0, bufferSize ) );
    outR.set( this.__pixelBuffer.slice( bufferSize, 2.0 * bufferSize ) );

    // process the next program??
    if ( this.__settingCue && beginNext < bufferSize ) {
      this.__settingCue = false;
      this.__emit( 'goCue' );

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
        outL.set( this.__pixelBuffer.slice( beginNext, bufferSize ), beginNext );
        outR.set( this.__pixelBuffer.slice( bufferSize + beginNext, 2.0 * bufferSize ), beginNext );
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
      gl.viewport( 0, 0, this.__bufferSize / 4, 2 );
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
      this.bufferSize / 4, // width
      2, // height
      GL.RGBA, // format
      GL.FLOAT, // type
      this.__pixelBuffer // dst
    );
  }
}

export interface WaveNerdDeck extends EventEmittable<{
  readyCue: void;
  setCue: void;
  goCue: void;
  error: { error: any };
}> {}
applyMixins( WaveNerdDeck, [ EventEmittable ] );
