import { Pool, arraySerial } from '@0b5vr/experimental';
import { shaderchunkPost, shaderchunkPre } from './shaderchunks';
import { glWaitGPUCommandsCompleteAsync } from './utils/glWaitGPUCommandsCompleteAsync';
import { lazyProgram } from './utils/lazyProgram';

const BLOCK_SIZE = 128;
const POOL_SIZE = 128;

export interface TFPoolEntry {
  bufferL: WebGLBuffer;
  bufferR: WebGLBuffer;
  tf: WebGLTransformFeedback;
  dstArrays: [ Float32Array, Float32Array ];
}

// -- utils ----------------------------------------------------------------------------------------
function createOffsetBuffer( gl: WebGL2RenderingContext, length: number ): WebGLBuffer {
  const array = new Float32Array( arraySerial( length ) );

  const buffer = gl.createBuffer()!;

  gl.bindBuffer( gl.ARRAY_BUFFER, buffer );
  gl.bufferData( gl.ARRAY_BUFFER, array, gl.STATIC_DRAW );
  gl.bindBuffer( gl.ARRAY_BUFFER, null );

  return buffer;
}

function createTFBuffer( gl: WebGL2RenderingContext, length: number ): WebGLBuffer {
  const buffer = gl.createBuffer()!;

  gl.bindBuffer( gl.ARRAY_BUFFER, buffer );
  gl.bufferData(
    gl.ARRAY_BUFFER,
    length * Float32Array.BYTES_PER_ELEMENT,
    gl.STREAM_READ,
  );
  gl.bindBuffer( gl.ARRAY_BUFFER, null );

  return buffer;
}

function createTFPoolEntry( gl: WebGL2RenderingContext, length: number ): TFPoolEntry {
  const bufferL = createTFBuffer( gl, length );
  const bufferR = createTFBuffer( gl, length );

  const tf = gl.createTransformFeedback()!;

  const dstArrays = [
    new Float32Array( length ),
    new Float32Array( length ),
  ] as [ Float32Array, Float32Array ];

  return { bufferL, bufferR, tf, dstArrays };
}

// -- class ----------------------------------------------------------------------------------------
export class Renderer {
  public readonly gl: WebGL2RenderingContext;
  public readonly blocksPerRender: number;

  public useSync: boolean;

  public readonly __extParallel: any;
  public readonly __tfPool: Pool<TFPoolEntry>;

  public get framesPerRender(): number {
    return BLOCK_SIZE * this.blocksPerRender;
  }

  private __offsetBuffer: WebGLBuffer;

  private __program: WebGLProgram | null;
  private __programCue: WebGLProgram | null;

  public constructor( gl: WebGL2RenderingContext, blocksPerRender: number ) {
    this.blocksPerRender = blocksPerRender;

    this.gl = gl;

    this.useSync = false;

    this.__tfPool = new Pool( arraySerial( POOL_SIZE ).map( () => (
      createTFPoolEntry( gl, this.framesPerRender )
    ) ) );

    this.__extParallel = gl.getExtension( 'KHR_parallel_shader_compile' );

    this.__offsetBuffer = createOffsetBuffer( gl, this.framesPerRender );

    this.__program = null;
    this.__programCue = null;
  }

  /**
   * Dispose the renderer.
   */
  public dispose(): void {
    const { gl } = this;

    gl.deleteBuffer( this.__offsetBuffer );

    for ( const { bufferL, bufferR, tf } of this.__tfPool.array ) {
      gl.deleteBuffer( bufferL );
      gl.deleteBuffer( bufferR );
      gl.deleteTransformFeedback( tf );
    }

    gl.deleteProgram( this.__program );
    gl.deleteProgram( this.__programCue );
  }

  /**
   * Get a tfPoolEntry.
   */
  public getNextTFPoolEntry(): TFPoolEntry {
    return this.__tfPool.next();
  }

  /**
   * Compile given shader code and cue the shader.
   */
  public async compile( code: string ): Promise<void> {
    const { gl } = this;

    const program = await lazyProgram(
      gl,
      shaderchunkPre + code + shaderchunkPost,
      '#version 300 es\nvoid main(){discard;}',
      {
        extParallel: this.__extParallel,
        tfVaryings: [ 'outL', 'outR' ],
      },
    ).catch( ( error ) => {
      this.__programCue = null;
      gl.deleteProgram( this.__programCue );

      throw error;
    } );

    if ( program == null ) { return; }

    this.__programCue = program;
  }

  /**
   * Apply the cue shader.
   *
   * It does not do nothing when cue is not set.
   * Feel free to mash this method for no reason.
   */
  public applyCue(): void {
    const { gl } = this;

    if ( this.__programCue == null ) { return; }

    const prevProgram = this.__program;
    this.__program = this.__programCue;

    if ( prevProgram != null ) {
      gl.deleteProgram( prevProgram );
    }
    this.__programCue = null;
  }

  /**
   * Set an uniform1f to the current program.
   */
  public uniform1f( name: string, value: number ): void {
    const { gl, __program: program } = this;
    if ( program == null ) { return; }

    const location = gl.getUniformLocation( program, name );

    gl.useProgram( program );
    gl.uniform1f( location, value );
    gl.useProgram( null );
  }

  /**
   * Set an uniform4f to the current program.
   */
  public uniform4f( name: string, ...value: [ number, number, number, number ] ): void {
    const { gl, __program: program } = this;
    if ( program == null ) { return; }

    const location = gl.getUniformLocation( program, name );

    gl.useProgram( program );
    gl.uniform4f( location, ...value );
    gl.useProgram( null );
  }

  /**
   * Set a texture uniform to the current program.
   */
  public uniformTexture( name: string, unit: number, texture: WebGLTexture ): void {
    const { gl, __program: program } = this;
    if ( program == null ) { return; }

    const location = gl.getUniformLocation( program, name );

    gl.activeTexture( gl.TEXTURE0 + unit );
    gl.bindTexture( gl.TEXTURE_2D, texture );

    gl.useProgram( program );
    gl.uniform1i( location, unit );
    gl.useProgram( null );
  }

  /**
   * Render and return a buffer.
   */
  public render( tfPoolEntry: TFPoolEntry, first: number, count: number ): void {
    const { gl, __program: program } = this;
    const { bufferL, bufferR, tf } = tfPoolEntry;

    if ( program == null ) {
      return;
    }

    // -- attrib -----------------------------------------------------------------------------------
    const attribLocation = gl.getAttribLocation( program, 'off' );

    gl.bindBuffer( gl.ARRAY_BUFFER, this.__offsetBuffer );
    gl.enableVertexAttribArray( attribLocation );
    gl.vertexAttribPointer( attribLocation, 1, gl.FLOAT, false, 0, 0 );

    // -- render -----------------------------------------------------------------------------------
    gl.useProgram( program );

    gl.bindTransformFeedback( gl.TRANSFORM_FEEDBACK, tf );
    gl.bindBufferRange( gl.TRANSFORM_FEEDBACK_BUFFER, 0, bufferL, 4 * first, 4 * count );
    gl.bindBufferRange( gl.TRANSFORM_FEEDBACK_BUFFER, 1, bufferR, 4 * first, 4 * count );
    gl.enable( gl.RASTERIZER_DISCARD );

    gl.beginTransformFeedback( gl.POINTS );
    gl.drawArrays( gl.POINTS, first, count );
    gl.endTransformFeedback();

    gl.disable( gl.RASTERIZER_DISCARD );
    gl.bindTransformFeedback( gl.TRANSFORM_FEEDBACK, null );
    gl.useProgram( null );
  }

  public async readBuffer( { bufferL, bufferR, dstArrays }: TFPoolEntry ): Promise<void> {
    const { gl } = this;

    if ( this.useSync ) {
      await glWaitGPUCommandsCompleteAsync( gl );
    }

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferL );
    gl.getBufferSubData(
      gl.ARRAY_BUFFER,
      0,
      dstArrays[ 0 ],
      0,
      this.framesPerRender,
    );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );

    gl.bindBuffer( gl.ARRAY_BUFFER, bufferR );
    gl.getBufferSubData(
      gl.ARRAY_BUFFER,
      0,
      dstArrays[ 1 ],
      0,
      this.framesPerRender,
    );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
  }
}
