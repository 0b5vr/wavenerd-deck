import { GL, GLCat, GLCatBuffer, GLCatFramebuffer, GLCatProgram, GLCatTexture } from '@fms-cat/glcat-ts';

const vertQuad = `attribute vec2 p;
void main() {
  gl_Position = vec4( p, 0.0, 1.0 );
}
`;

export class WaveNerdEngine {
  public bpm: number = 160.0;

  private __beat = 0.0;
  private __bar = 0.0;
  private __sixteenBar = 0.0;
  private __bufferSize: number = 1024;
  private __audio: AudioContext;
  private __node: ScriptProcessorNode;
  private __glCat: GLCat;
  private __bufferQuad: GLCatBuffer;
  private __framebufferTexture: GLCatTexture;
  private __framebuffer: GLCatFramebuffer;
  private __program: GLCatProgram | null = null;
  private __programCue: GLCatProgram | null = null;
  private __time: number = 0;
  private __dateLastUpdated: number = Date.now();
  private __pixelBuffer: Float32Array;
  private __lastError: any;

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
   * Its last compile error happened in [[WaveNerdEngine.compile]].
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
   * Constructor of the WaveNerd engine.
   */
  public constructor( glCat: GLCat, audio: AudioContext ) {
    this.__glCat = glCat;
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
   * Compile given shader code and cue the shader.
   */
  public compile( frag: string ): void {
    try {
      this.__programCue = this.__glCat.lazyProgram( vertQuad, frag );
      this.__lastError = null;
    } catch ( e ) {
      this.__lastError = e;
      throw e;
    }
  }

  /**
   * Dispose this WaveNerdEngine.
   */
  public dispose(): void {
    this.__bufferQuad.dispose();
    if ( this.__program ) {
      const shaders = this.__program.getShaders();
      if ( shaders ) {
        shaders.forEach( ( shader ) => shader.dispose() );
      }
      this.__program.dispose();
    }
  }

  private __handleProcess( event: AudioProcessingEvent ): void {
    const divBeat = 60.0 / this.bpm;
    const divBar = divBeat * 4.0;
    const divSixteenBar = divBar * 16.0;

    const deltaTime = this.bufferSize / this.sampleRate;
    this.__time = this.__time + deltaTime;
    this.__beat = ( this.__beat + deltaTime / divBeat ) % 1.0;
    this.__bar = ( this.__bar + deltaTime / divBar );
    const barReset = 1.0 < this.__bar;
    this.__bar = this.__bar % 1.0;
    this.__sixteenBar = ( this.__sixteenBar + deltaTime / divSixteenBar ) % 1.0;
    this.__dateLastUpdated = Date.now();

    // TODO: swap shader
    if ( this.__programCue && barReset ) { // 🔥
      const prevProgram = this.__program;
      this.__program = this.__programCue;

      if ( prevProgram ) {
        prevProgram.getShaders()!.forEach( ( shader ) => shader.dispose() );
        prevProgram.dispose();
      }
      this.__programCue = null;
    }

    const outL = event.outputBuffer.getChannelData( 0 );
    const outR = event.outputBuffer.getChannelData( 1 );
    const gl = this.__glCat.getRenderingContext();

    // render
    if ( this.__program ) {
      this.__glCat.useProgram( this.__program );
      gl.viewport( 0, 0, this.__bufferSize / 4, 2 );
      gl.bindFramebuffer( gl.FRAMEBUFFER, this.__framebuffer.getFramebuffer() );
      gl.blendFunc( GL.ONE, GL.ZERO );
      gl.clear( GL.DEPTH_BUFFER_BIT | GL.COLOR_BUFFER_BIT );

      this.__program.attribute( 'p', this.__bufferQuad, 2 );
      this.__program.uniform1f( '_deltaSample', 1.0 / this.sampleRate );
      this.__program.uniform4f( '_timeMod', divBeat, divBar, divSixteenBar, 1E16 );
      this.__program.uniform4f(
        '_timeHead',
        this.__beat * divBeat,
        this.__bar * divBar,
        this.__sixteenBar * divSixteenBar,
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

    // insert into its audio buffer
    outL.set( this.__pixelBuffer.slice( 0, this.__bufferSize ) );
    outR.set( this.__pixelBuffer.slice( this.__bufferSize, 2 * this.__bufferSize ) );
  }
}
