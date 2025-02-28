export type RendererResponseData = (
  | { type: 'dispose' }
  | { type: 'compile' }
  | { type: 'applyCue' }
  | { type: 'uniform1f' }
  | { type: 'uniform4f' }
  | { type: 'uniformTexture' }
  | { type: 'uploadTexture' }
  | { type: 'deleteTexture' }
  | { type: 'clearTextures' }
  | { type: 'render' }
  | { type: 'readBuffer'; bufferL: ArrayBufferLike; bufferR: ArrayBufferLike }
  | { type: string; error: any }
) & { error?: any };
