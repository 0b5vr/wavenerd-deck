import { TextureStoreEntry } from '../TextureStoreEntry';
import { RenderUniforms } from './RenderUniforms';

export type RendererRequestData = (
  | { type: 'dispose' }
  | { type: 'compile'; code: string }
  | { type: 'applyCue' }
  | { type: 'uploadTexture'; textureId: string; entry: TextureStoreEntry }
  | { type: 'deleteTexture'; textureId: string }
  | { type: 'clearTextures' }
  | { type: 'render'; tfIndex: number; first: number; count: number; uniforms: RenderUniforms }
  | { type: 'readBuffer'; tfIndex: number }
  | { type: '__heck' } // to make type check work
);
