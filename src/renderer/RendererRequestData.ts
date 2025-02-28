import { TextureStoreEntry } from '../TextureStoreEntry';

export type RendererRequestData = (
  | { type: 'dispose' }
  | { type: 'compile'; code: string }
  | { type: 'applyCue' }
  | { type: 'uniform1f'; name: string; value: number }
  | { type: 'uniform4f'; name: string; value: [number, number, number, number] }
  | { type: 'uniformTexture'; name: string; unit: number; textureId: string }
  | { type: 'uploadTexture'; textureId: string; entry: TextureStoreEntry }
  | { type: 'deleteTexture'; textureId: string }
  | { type: 'clearTextures' }
  | { type: 'render'; tfIndex: number; first: number; count: number }
  | { type: 'readBuffer'; tfIndex: number }
  | { type: '__heck' } // to make type check work
);
