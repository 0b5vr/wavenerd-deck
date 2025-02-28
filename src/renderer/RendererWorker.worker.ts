import { RendererImpl } from './RendererImpl';
import { RendererRequestData } from './RendererRequestData';
import { RendererResponseData } from './RendererResponseData';

const canvas = new OffscreenCanvas(4, 4);
const gl = canvas.getContext('webgl2')!;
const rendererImpl = new RendererImpl(gl);

// Message handler
self.onmessage = async (event: MessageEvent<RendererRequestData & { id: number }>) => {
  const data = event.data;
  const { id, type } = data;

  try {
    if (type === 'dispose') {
      rendererImpl.dispose();
      postResponse({ id, type });
    } else if (type === 'compile') {
      await rendererImpl.compile(data.code);
      postResponse({ id, type });
    } else if (type === 'applyCue') {
      rendererImpl.applyCue();
      postResponse({ id, type });
    } else if (type === 'uploadTexture') {
      const { textureId, entry } = data;
      rendererImpl.uploadTexture(textureId, entry);
      postResponse({ id, type });
    } else if (type === 'deleteTexture') {
      const { textureId } = data;
      rendererImpl.deleteTexture(textureId);
      postResponse({ id, type });
    } else if (type === 'clearTextures') {
      rendererImpl.clearTextures();
      postResponse({ id, type });
    } else if (type === 'updateBlocksPerRender') {
      const { blocksPerRender } = data;
      rendererImpl.updateBlocksPerRender(blocksPerRender);
      postResponse({ id, type });
    } else if (type === 'render') {
      const { first, count, uniforms } = data;
      rendererImpl.render(first, count, uniforms);
      postResponse({ id, type });
    } else if (type === 'readBuffer') {
      const [arrayL, arrayR] = await rendererImpl.readBuffer();
      postResponse({ id, type, bufferL: arrayL.buffer, bufferR: arrayR.buffer }, [arrayL.buffer, arrayR.buffer]);
    }
  } catch (error) {
    postResponse({ id, type, error: (error as Error).message });
  }
};

function postResponse(data: RendererResponseData & { id: number }, transfer: Transferable[] = []): void {
  self.postMessage(data, { transfer });
}
