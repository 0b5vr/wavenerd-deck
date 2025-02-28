export interface RenderUniforms {
  uniform1f: Array<{
    name: string;
    value: number;
  }>;
  uniform4f: Array<{
    name: string;
    value: [number, number, number, number];
  }>;
  uniformTexture: Array<{
    name: string;
    unit: number;
    textureId: string;
  }>;
}
