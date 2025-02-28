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
    } else if (type === 'uniform1f') {
      rendererImpl.uniform1f(data.name, data.value);
      postResponse({ id, type });
    } else if (type === 'uniform4f') {
      const [v0, v1, v2, v3] = data.value;
      rendererImpl.uniform4f(data.name, v0, v1, v2, v3);
      postResponse({ id, type });
    } else if (type === 'uniformTexture') {
      const { name, unit, textureId } = data;
      rendererImpl.uniformTexture(name, unit, textureId);
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
    } else if (type === 'render') {
      const { tfIndex, first, count } = data;
      rendererImpl.render(tfIndex, first, count);
      postResponse({ id, type });
    } else if (type === 'readBuffer') {
      const { tfIndex: readTfIndex } = data;
      const [arrayL, arrayR] = await rendererImpl.readBuffer(readTfIndex);
      postResponse({ id, type, bufferL: arrayL.buffer, bufferR: arrayR.buffer }, [arrayL.buffer, arrayR.buffer]);
    }
  } catch (error) {
    postResponse({ id, type, error: (error as Error).message });
  }
};

function postResponse(data: RendererResponseData & { id: number }, transfer: Transferable[] = []): void {
  self.postMessage(data, { transfer });
}
