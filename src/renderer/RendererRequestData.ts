import { TextureStoreEntry } from '../TextureStoreEntry';
import { RenderUniforms } from './RenderUniforms';

export type RendererRequestData = (
  | { type: 'dispose' }
  | { type: 'compile'; code: string }
  | { type: 'applyCue' }
  | { type: 'uploadTexture'; textureId: string; entry: TextureStoreEntry }
  | { type: 'deleteTexture'; textureId: string }
  | { type: 'clearTextures' }
  | { type: 'updateBlocksPerRender'; blocksPerRender: number }
  | { type: 'render'; first: number; count: number; uniforms: RenderUniforms }
  | { type: 'readBuffer' }
  | { type: '__heck' } // to make type check work
);
