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
  | { type: 'updateBlocksPerRender' }
  | { type: 'render' }
  | { type: 'readBuffer'; bufferL: Float32Array; bufferR: Float32Array }
  | { type: string; error: any }
) & { error?: any };
