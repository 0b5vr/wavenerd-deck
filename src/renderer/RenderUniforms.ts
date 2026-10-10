/**
 * A set of uniforms to be used for rendering.
 *
 * Will be provided from `WavenerdDeck` and used in `RendererImpl`.
 */
export interface RenderUniforms {
  uniform1f: Array<{
    name: string;
    value: number;
  }>;
  uniform4f: Array<{
    name: string;
    value: [number, number, number, number];
  }>;
  uniform1i: Array<{
    name: string;
    value: number;
  }>;
  uniform3iv: Array<{
    name: string;

    /** Flattened ivec3s. */
    value: number[];
  }>;
  uniformTexture: Array<{
    name: string;
    unit: number;
    textureId: string;
  }>;
}
