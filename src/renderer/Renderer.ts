// @ts-expect-error - This will be handled by esbuild-plugin-inline-worker
import Worker from './RendererWorker.worker';
import { RendererResponseData } from './RendererResponseData';
import { RendererRequestData } from './RendererRequestData';
import { RenderUniforms } from './RenderUniforms';

export interface TFPoolEntry {
  bufferL: WebGLBuffer;
  bufferR: WebGLBuffer;
  tf: WebGLTransformFeedback;
  dstArrays: [Float32Array, Float32Array];
}

export class Renderer {
  private worker: Worker;
  private messageId = 0;
  private pendingPromises = new Map<number, {
    resolve: (value: any) => void;
    reject: (reason: Error) => void;
  }>();

  public readonly gl: WebGL2RenderingContext;

  constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;

    this.worker = Worker();
    this.worker.onmessage = this.__handleMessage.bind(this);
  }

  /**
   * Dispose the renderer.
   */
  public dispose(): void {
    this.__sendMessage({ type: 'dispose' }).catch(console.error);
    this.worker.terminate();
  }

  /**
   * Compile given shader code and cue the shader.
   */
  public async compile(code: string): Promise<void> {
    await this.__sendMessage({ type: 'compile', code });
  }

  /**
   * Apply the cue shader.
   */
  public applyCue(): void {
    this.__sendMessage({ type: 'applyCue' }).catch(console.error);
  }

  /**
   * Upload a texture to the worker.
   */
  public uploadTexture(textureId: string, entry: any): void {
    this.__sendMessage({ type: 'uploadTexture', textureId, entry }).catch(console.error);
  }

  /**
   * Delete a texture from the worker.
   */
  public deleteTexture(textureId: string): void {
    this.__sendMessage({ type: 'deleteTexture', textureId }).catch(console.error);
  }

  /**
   * Clear all textures from the worker.
   */
  public clearTextures(): void {
    this.__sendMessage({ type: 'clearTextures' }).catch(console.error);
  }

  /**
   * Render and return a buffer.
   */
  public render(tfIndex: number, first: number, count: number, uniforms: RenderUniforms): void {
    this.__sendMessage({ type: 'render', tfIndex, first, count, uniforms }).catch(console.error);
  }

  /**
   * Read buffer data from the worker.
   */
  public async readBuffer(tfIndex: number): Promise<[Float32Array, Float32Array]> {
    const result = await this.__sendMessage({ type: 'readBuffer', tfIndex });
    return [new Float32Array(result.bufferL), new Float32Array(result.bufferR)];
  }

  private __sendMessage(data: RendererRequestData): Promise<any> {
    const id = this.messageId++;
    const promise = new Promise((resolve, reject) => {
      this.pendingPromises.set(id, { resolve, reject });
    });

    this.worker.postMessage({ id, ...data });
    return promise;
  }

  private __handleMessage(event: MessageEvent<RendererResponseData & { id: number }>): void {
    const data = event.data;
    const { id, error } = data;

    const pendingPromise = this.pendingPromises.get(id);

    if (pendingPromise) {
      this.pendingPromises.delete(id);
      if (error != null) {
        pendingPromise.reject(new Error(error));
      } else {
        pendingPromise.resolve(data);
      }
    }
  }
}
