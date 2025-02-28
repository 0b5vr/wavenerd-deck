import { TextureStoreEntry, TextureStoreImageEntry, TextureStoreSampleEntry, TextureStoreWavetableEntry } from './TextureStoreEntry';
import { EventEmittable } from './utils/EventEmittable';

export interface TextureStoreEvent {
  load: { id: string; entry: TextureStoreEntry };
  delete: { id: string };
  dispose: void;
}

export class TextureStore extends EventEmittable<TextureStoreEvent> {
  private __textures: Map<string, TextureStoreEntry>;

  public get textureIds(): IterableIterator<string> {
    return this.__textures.keys();
  }

  public constructor() {
    super();
    this.__textures = new Map();
  }

  /**
   * Dispose all the textures.
   */
  public dispose(): void {
    this.__textures.clear();
    this.__emit('dispose');
  }

  /**
   * Get a texture entry.
   */
  public get(id: string): TextureStoreEntry | null {
    return this.__textures.get(id) ?? null;
  }

  /**
   * Load a x-y wavetable and store it.
   * The buffer have to be encoded in F32, 2048 samples per cycle.
   */
  public loadWavetable(id: string, inputBuffer: Float32Array): TextureStoreWavetableEntry {
    // Process the wavetable buffer
    const buffer = new Float32Array(inputBuffer.length * 4);
    for (let i = 0; i < inputBuffer.length; i++) {
      buffer[i * 4 + 0] = inputBuffer[i];
    }

    const entry: TextureStoreWavetableEntry = {
      type: 'wavetable',
      meta: [
        2048, // width
        buffer.length / (4 * 2048), // height
        0,
        0,
      ],
      wavetableBuffer: buffer,
    };
    this.__textures.set(id, entry);

    // Emit event for texture added
    this.__emit('load', { id, entry });

    return entry;
  }

  /**
   * Load an image and store it.
   */
  public loadImage(
    id: string,
    image: HTMLImageElement,
  ): TextureStoreImageEntry {
    // Convert image to Uint8Array
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, image.width, image.height);

    const entry: TextureStoreImageEntry = {
      type: 'image',
      meta: [
        image.width, // width
        image.height, // height
        0,
        0,
      ],
      imageBuffer: imageData.data,
    };
    this.__textures.set(id, entry);

    // Emit event for texture added
    this.__emit('load', { id, entry });

    return entry;
  }

  /**
   * Load a sample and store it.
   */
  public loadSample(id: string, audioBuffer: AudioBuffer): TextureStoreSampleEntry {
    // Convert AudioBuffer to Float32Array[]
    const channels = audioBuffer.numberOfChannels;
    const audioData: Float32Array[] = [];

    for (let i = 0; i < channels; i++) {
      audioData.push(audioBuffer.getChannelData(i));
    }

    const entry: TextureStoreSampleEntry = {
      type: 'sample',
      meta: [
        2048, // width
        Math.ceil(audioBuffer.length / 2048), // height
        audioBuffer.sampleRate,
        audioBuffer.duration,
      ],
      audioBuffer: audioData,
    };
    this.__textures.set(id, entry);

    // Emit event for texture added
    this.__emit('load', { id, entry });

    return entry;
  }

  /**
   * Delete a texture entry.
   *
   * Returns a boolean that indicates whether the deletion is successful or not.
   */
  public delete(id: string): boolean {
    const texture = this.__textures.get(id);
    if (texture == null) { return false; }

    this.__textures.delete(id);

    // Emit event for texture removed
    this.__emit('delete', { id });

    return true;
  }
}
