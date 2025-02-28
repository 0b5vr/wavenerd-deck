import { arraySerial } from '@0b5vr/experimental';
import { shaderchunkPost, shaderchunkPre } from './shaderchunks';
import { glslBinaryLiterals } from './glslBinaryLiterals';
import { lazyProgram } from './utils/lazyProgram';
import { TextureUploader } from './TextureUploader';
import { TextureStoreEntry } from '../TextureStoreEntry';
import { POOL_SIZE, FRAMES_PER_RENDER } from '../constants';
import { RenderUniforms } from './RenderUniforms';

// Internal TF pool entry for the worker
interface TFPoolEntry {
  bufferL: WebGLBuffer;
  bufferR: WebGLBuffer;
  tf: WebGLTransformFeedback;
  dstArrays: [Float32Array, Float32Array];
}

// Texture data interface for transferring texture data
export interface TextureData {
  type: 'image' | 'wavetable' | 'sample';
  width: number;
  height: number;
  data: ArrayBuffer;
  format?: number; // gl.RGBA, gl.RGB, etc.
  internalFormat?: number; // gl.RGBA8, gl.RGB8, etc.
  dataType?: number; // gl.UNSIGNED_BYTE, gl.FLOAT, etc.
}

// -- utils ----------------------------------------------------------------------------------------
function createOffsetBuffer(gl: WebGL2RenderingContext, length: number): WebGLBuffer {
  const array = new Float32Array(arraySerial(length));

  const buffer = gl.createBuffer()!;

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  return buffer;
}

function createTFBuffer(gl: WebGL2RenderingContext, length: number): WebGLBuffer {
  const buffer = gl.createBuffer()!;

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    length * Float32Array.BYTES_PER_ELEMENT,
    gl.DYNAMIC_READ,
  );
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  return buffer;
}

function createTFPoolEntry(gl: WebGL2RenderingContext, length: number): TFPoolEntry {
  const bufferL = createTFBuffer(gl, length);
  const bufferR = createTFBuffer(gl, length);

  const tf = gl.createTransformFeedback()!;

  const dstArrays = [
    new Float32Array(length),
    new Float32Array(length),
  ] as [Float32Array, Float32Array];

  return { bufferL, bufferR, tf, dstArrays };
}

// -- class ----------------------------------------------------------------------------------------
export class RendererImpl {
  public readonly gl: WebGL2RenderingContext;

  public readonly __extParallel: any;
  private readonly __tfPool: TFPoolEntry[];
  private __textureUploader: TextureUploader;

  private __offsetBuffer: WebGLBuffer;

  private __program: WebGLProgram | null;
  private __programCue: WebGLProgram | null;

  public constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;

    this.__tfPool = arraySerial(POOL_SIZE).map(() => (
      createTFPoolEntry(gl, FRAMES_PER_RENDER)
    ));

    this.__extParallel = gl.getExtension('KHR_parallel_shader_compile');

    this.__offsetBuffer = createOffsetBuffer(gl, FRAMES_PER_RENDER);

    this.__program = null;
    this.__programCue = null;

    // Initialize texture uploader
    this.__textureUploader = new TextureUploader(gl);
  }

  /**
   * Dispose the renderer.
   */
  public dispose(): void {
    const { gl } = this;

    gl.deleteBuffer(this.__offsetBuffer);

    for (const { bufferL, bufferR, tf } of this.__tfPool) {
      gl.deleteBuffer(bufferL);
      gl.deleteBuffer(bufferR);
      gl.deleteTransformFeedback(tf);
    }

    this.__textureUploader.clearTextures();

    gl.deleteProgram(this.__program);
    gl.deleteProgram(this.__programCue);
  }

  /**
   * Upload a texture from a texture entry.
   */
  public uploadTexture(id: string, entry: TextureStoreEntry): WebGLTexture {
    return this.__textureUploader.uploadTexture(id, entry);
  }

  /**
   * Delete a texture by ID.
   */
  public deleteTexture(id: string): boolean {
    return this.__textureUploader.deleteTexture(id);
  }

  /**
   * Clear all textures.
   */
  public clearTextures(): void {
    this.__textureUploader.clearTextures();
  }

  /**
   * Compile given shader code and cue the shader.
   */
  public async compile(code: string): Promise<void> {
    const { gl } = this;

    let codeToCompile = shaderchunkPre + code + shaderchunkPost;
    codeToCompile = glslBinaryLiterals(codeToCompile);

    const program = await lazyProgram(
      gl,
      codeToCompile,
      '#version 300 es\nvoid main(){discard;}',
      {
        extParallel: this.__extParallel,
        tfVaryings: ['outL', 'outR'],
      },
    ).catch((error) => {
      this.__programCue = null;
      if (this.__programCue) {
        gl.deleteProgram(this.__programCue);
      }

      throw error;
    });

    if (program == null) { return; }

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

    if (this.__programCue == null) { return; }

    const prevProgram = this.__program;
    this.__program = this.__programCue;

    if (prevProgram != null) {
      gl.deleteProgram(prevProgram);
    }
    this.__programCue = null;
  }

  /**
   * Render and return a buffer.
   */
  public render(tfIndex: number, first: number, count: number, uniforms: RenderUniforms): void {
    const { gl, __program: program } = this;
    const tfPoolEntry = this.__tfPool[tfIndex];
    const { bufferL, bufferR, tf } = tfPoolEntry;

    if (program == null) {
      return;
    }

    gl.useProgram(program);

    // -- uniforms ---------------------------------------------------------------------------------
    for (const { name, value } of uniforms.uniform1f) {
      const location = gl.getUniformLocation(program, name);
      gl.uniform1f(location, value);
    }

    for (const { name, value } of uniforms.uniform4f) {
      const location = gl.getUniformLocation(program, name);
      gl.uniform4f(location, ...value);
    }

    // Apply texture uniforms
    for (const { name, unit, textureId } of uniforms.uniformTexture) {
      const texture = this.__textureUploader.getTexture(textureId);

      if (texture != null) {
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        const location = gl.getUniformLocation(program, name);
        gl.uniform1i(location, unit);
      }
    }

    // -- attrib -----------------------------------------------------------------------------------
    const attribLocation = gl.getAttribLocation(program, 'off');

    gl.bindBuffer(gl.ARRAY_BUFFER, this.__offsetBuffer);
    gl.enableVertexAttribArray(attribLocation);
    gl.vertexAttribPointer(attribLocation, 1, gl.FLOAT, false, 0, 0);

    // -- render -----------------------------------------------------------------------------------
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf);
    gl.bindBufferRange(gl.TRANSFORM_FEEDBACK_BUFFER, 0, bufferL, 4 * first, 4 * count);
    gl.bindBufferRange(gl.TRANSFORM_FEEDBACK_BUFFER, 1, bufferR, 4 * first, 4 * count);
    gl.enable(gl.RASTERIZER_DISCARD);

    gl.beginTransformFeedback(gl.POINTS);
    gl.drawArrays(gl.POINTS, first, count);
    gl.endTransformFeedback();

    gl.disable(gl.RASTERIZER_DISCARD);
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
    gl.useProgram(null);
  }

  public async readBuffer(tfIndex: number): Promise<[Float32Array, Float32Array]> {
    const { gl } = this;
    const tfPoolEntry = this.__tfPool[tfIndex];
    const { bufferL, bufferR, dstArrays } = tfPoolEntry;

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferL);
    gl.getBufferSubData(
      gl.ARRAY_BUFFER,
      0,
      dstArrays[0],
      0,
      FRAMES_PER_RENDER,
    );
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferR);
    gl.getBufferSubData(
      gl.ARRAY_BUFFER,
      0,
      dstArrays[1],
      0,
      FRAMES_PER_RENDER,
    );
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // We need to create new arrays because `dstArrays` will be reused
    return [
      new Float32Array(dstArrays[0]),
      new Float32Array(dstArrays[1]),
    ];
  }
}
