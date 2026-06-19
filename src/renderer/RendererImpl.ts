import { shaderchunkVertex, shaderchunkPre, shaderchunkPost } from './shaderchunks';
import { glslBinaryLiterals } from './glslBinaryLiterals';
import { glWaitGPUCommandsCompleteAsync } from '../utils/glWaitGPUCommandsCompleteAsync';
import { lazyProgram } from './utils/lazyProgram';
import { TextureUploader } from './TextureUploader';
import { TextureStoreEntry } from '../TextureStoreEntry';
import { BLOCK_SIZE } from '../constants';
import { RenderUniforms } from './RenderUniforms';

// -- utils ----------------------------------------------------------------------------------------
function createQuadBuffer(gl: WebGL2RenderingContext): WebGLBuffer {
  const vertices = new Float32Array([
    -1.0, -1.0,
    1.0, -1.0,
    -1.0, 1.0,
    1.0, 1.0,
  ]);

  const buffer = gl.createBuffer()!;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  return buffer;
}

function createFramebufferTexture(gl: WebGL2RenderingContext, width: number): WebGLTexture {
  const texture = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, texture);

  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA32F,
    width,
    1,
    0,
    gl.RGBA,
    gl.FLOAT,
    null,
  );

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  gl.bindTexture(gl.TEXTURE_2D, null);

  return texture;
}

function createFramebuffer(gl: WebGL2RenderingContext, length: number): [WebGLFramebuffer, WebGLTexture] {
  const framebuffer = gl.createFramebuffer()!;

  const texture = createFramebufferTexture(gl, length);

  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  return [framebuffer, texture];
}

// -- readback pool --------------------------------------------------------------------------------
const READBACK_POOL_SIZE = 16;

type ReadbackEntry = [
  pixelBuffer: WebGLBuffer,
  dstArray: Float32Array,
];

class ReadbackPool {
  private __pool: ReadbackEntry[];
  private __index: number;

  public constructor(gl: WebGL2RenderingContext, framesPerRender: number) {
    this.__pool = [];
    for (let i = 0; i < READBACK_POOL_SIZE; i++) {
      this.__pool[i] = this.__createReadbackEntry(gl, framesPerRender);
    }

    this.__index = 0;
  }

  public next(): ReadbackEntry {
    const entry = this.__pool[this.__index];
    this.__index = (this.__index + 1) % READBACK_POOL_SIZE;
    return entry;
  }

  public dispose(gl: WebGL2RenderingContext): void {
    for (const entry of this.__pool) {
      gl.deleteBuffer(entry[0]);
    }
  }

  private __createReadbackEntry(gl: WebGL2RenderingContext, framesPerRender: number): ReadbackEntry {
    const pixelBuffer = gl.createBuffer()!;
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, pixelBuffer);
    gl.bufferData(gl.PIXEL_PACK_BUFFER, framesPerRender * 4 * 4, gl.STREAM_READ);
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);

    return [pixelBuffer, new Float32Array(framesPerRender * 4)];
  }
}

// -- class ----------------------------------------------------------------------------------------
export class RendererImpl {
  public readonly gl: WebGL2RenderingContext;

  public readonly __extParallel: any;
  private __blocksPerRender: number;
  private __framebuffer: WebGLFramebuffer;
  private __texture: WebGLTexture;
  private __readbackPool: ReadbackPool;
  private __textureUploader: TextureUploader;

  private __quadBuffer: WebGLBuffer;

  private __program: WebGLProgram | null;
  private __programCue: WebGLProgram | null;

  private get __framesPerRender(): number {
    return BLOCK_SIZE * this.__blocksPerRender;
  }

  public constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;
    gl.getExtension('EXT_color_buffer_float');
    gl.enable(gl.SCISSOR_TEST);

    this.__blocksPerRender = 16;

    const [framebuffer, texture] = createFramebuffer(gl, this.__framesPerRender);
    this.__framebuffer = framebuffer;
    this.__texture = texture;
    this.__readbackPool = new ReadbackPool(gl, this.__framesPerRender);

    this.__extParallel = gl.getExtension('KHR_parallel_shader_compile');

    this.__quadBuffer = createQuadBuffer(gl);

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

    gl.deleteBuffer(this.__quadBuffer);
    this.__readbackPool.dispose(gl);

    gl.deleteFramebuffer(this.__framebuffer);
    gl.deleteTexture(this.__texture);

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
   * Update the blocks per render value and regenerate framebuffers.
   */
  public updateBlocksPerRender(blocksPerRender: number): void {
    if (this.__blocksPerRender === blocksPerRender) return;

    this.__blocksPerRender = blocksPerRender;
    const framesPerRender = this.__framesPerRender;

    const { gl } = this;

    // Clean up old resources
    gl.deleteFramebuffer(this.__framebuffer);
    gl.deleteTexture(this.__texture);
    this.__readbackPool.dispose(gl);

    // Create new resources
    const [framebuffer, texture] = createFramebuffer(gl, framesPerRender);
    this.__framebuffer = framebuffer;
    this.__texture = texture;
    this.__readbackPool = new ReadbackPool(gl, framesPerRender);
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
      shaderchunkVertex,
      codeToCompile,
      {
        extParallel: this.__extParallel,
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
  public render(first: number, count: number, uniforms: RenderUniforms): void {
    const { gl } = this;
    const framesPerRender = this.__framesPerRender;
    const program = this.__program;
    const framebuffer = this.__framebuffer;

    if (program == null) {
      return;
    }

    // Use the program
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
    const positionLocation = gl.getAttribLocation(program, 'position');

    gl.bindBuffer(gl.ARRAY_BUFFER, this.__quadBuffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // -- framebuffer ------------------------------------------------------------------------------
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.viewport(0, 0, framesPerRender, 1);
    gl.scissor(first, 0, count, 1);

    // -- clear ------------------------------------------------------------------------------------
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // -- render -----------------------------------------------------------------------------------
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    // -- cleanup ----------------------------------------------------------------------------------
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.useProgram(null);
  }

  public async readBuffer(): Promise<[Float32Array, Float32Array]> {
    const { gl } = this;
    const framesPerRender = this.__framesPerRender;
    const framebuffer = this.__framebuffer;

    // Grab the next entry from the pool
    const [pixelBuffer, dstArray] = this.__readbackPool.next();

    // Ref: https://github.com/mrdoob/three.js/pull/28291

    // Bind the framebuffer and pixel buffer, issue readPixels
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, pixelBuffer);
    gl.readPixels(0, 0, framesPerRender, 1, gl.RGBA, gl.FLOAT, 0);
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // Wait for the GPU readback to complete
    await glWaitGPUCommandsCompleteAsync(gl);

    // Readback the data into the JS realm
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, pixelBuffer);
    gl.getBufferSubData(gl.PIXEL_PACK_BUFFER, 0, dstArray);
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);

    // Extract the left and right channels from the RGBA data
    const leftChannel = new Float32Array(framesPerRender);
    const rightChannel = new Float32Array(framesPerRender);

    for (let i = 0; i < framesPerRender; i++) {
      leftChannel[i] = dstArray[i * 4 + 0];
      rightChannel[i] = dstArray[i * 4 + 1];
    }

    return [leftChannel, rightChannel];
  }
}
