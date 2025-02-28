import { TextureStoreEntry, TextureStoreImageEntry, TextureStoreSampleEntry, TextureStoreWavetableEntry } from '../TextureStoreEntry';

/**
 * Class for uploading textures to WebGL in the worker thread
 */
export class TextureUploader {
  private gl: WebGL2RenderingContext;
  private textures: Map<string, WebGLTexture> = new Map();

  constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;
  }

  /**
   * Upload a texture based on its type.
   */
  public uploadTexture(id: string, entry: TextureStoreEntry): WebGLTexture {
    const { type } = entry;
    if (type === 'image') {
      return this.uploadImageTexture(id, entry as TextureStoreImageEntry);
    } else if (type === 'wavetable') {
      return this.uploadWavetableTexture(id, entry as TextureStoreWavetableEntry);
    } else if (type === 'sample') {
      return this.uploadSampleTexture(id, entry as TextureStoreSampleEntry);
    } else {
      throw new Error(`Unreachable. Unknown TextureStoreEntry type: ${type}`);
    }
  }

  /**
   * Upload an image texture from serialized data.
   */
  public uploadImageTexture(id: string, entry: TextureStoreImageEntry): WebGLTexture {
    // Check if texture already exists
    if (this.textures.has(id)) {
      return this.textures.get(id)!;
    }

    const { meta, imageBuffer } = entry;
    const width = meta[0];
    const height = meta[1];

    // Create a new texture
    const texture = this.gl.createTexture()!;
    this.textures.set(id, texture);

    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

    // Upload image data
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA8,
      width,
      height,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      imageBuffer,
    );

    // interpolate linearly
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);

    this.gl.bindTexture(this.gl.TEXTURE_2D, null);

    return texture;
  }

  /**
   * Upload a wavetable texture from serialized data.
   */
  public uploadWavetableTexture(id: string, entry: TextureStoreWavetableEntry): WebGLTexture {
    // Check if texture already exists
    if (this.textures.has(id)) {
      return this.textures.get(id)!;
    }

    const { meta, wavetableBuffer } = entry;
    const width = meta[0];
    const height = meta[1];

    // Create a new texture
    const texture = this.gl.createTexture()!;
    this.textures.set(id, texture);

    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

    // Upload wavetable data
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA32F,
      width,
      height,
      0,
      this.gl.RGBA,
      this.gl.FLOAT,
      wavetableBuffer,
    );

    // do not interpolate
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);

    this.gl.bindTexture(this.gl.TEXTURE_2D, null);

    return texture;
  }

  /**
   * Upload a sample texture from serialized data.
   */
  public uploadSampleTexture(id: string, entry: TextureStoreSampleEntry): WebGLTexture {
    // Check if texture already exists
    if (this.textures.has(id)) {
      return this.textures.get(id)!;
    }

    const { meta, audioBuffer } = entry;
    const width = meta[0];
    const height = meta[1];

    // Create buffer for sample data
    const buffer = new Float32Array(width * height * 4);

    // Assuming audioBuffer[0] is left channel and audioBuffer[1] is right channel
    const dataL = audioBuffer[0];
    const dataR = audioBuffer.length > 1 ? audioBuffer[1] : audioBuffer[0];

    // Copy audio data to the buffer
    for (let i = 0; i < dataL.length; i++) {
      buffer[i * 4 + 0] = dataL[i];
      buffer[i * 4 + 1] = dataR[i];
    }

    // Create a new texture
    const texture = this.gl.createTexture()!;
    this.textures.set(id, texture);

    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

    // Upload sample data
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA32F,
      width,
      height,
      0,
      this.gl.RGBA,
      this.gl.FLOAT,
      buffer,
    );

    // do not interpolate
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);

    this.gl.bindTexture(this.gl.TEXTURE_2D, null);

    return texture;
  }

  /**
   * Get a texture by ID.
   */
  public getTexture(id: string): WebGLTexture | undefined {
    return this.textures.get(id);
  }

  /**
   * Delete a texture by ID.
   */
  public deleteTexture(id: string): boolean {
    const texture = this.textures.get(id);
    if (!texture) return false;

    this.gl.deleteTexture(texture);
    this.textures.delete(id);
    return true;
  }

  /**
   * Clear all textures.
   */
  public clearTextures(): void {
    for (const texture of this.textures.values()) {
      this.gl.deleteTexture(texture);
    }
    this.textures.clear();
  }
}
