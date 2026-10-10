import { WavenerdTextureStoreEntry, WavenerdTextureStoreImageEntry, WavenerdTextureStoreSampleEntry, WavenerdTextureStoreWavetableEntry } from './WavenerdTextureStoreEntry';
import { Observable } from './utils/Observable';

type WavenerdTextureStoreEntryType = WavenerdTextureStoreEntry['type'];

type WavenerdTextureStoreLoadEvent = {
  [K in WavenerdTextureStoreEntryType]: {
    /**
     * The id of the texture, like `sample_amen`. Shaders refer to the texture by this.
     */
    id: string;
    name: string;
    type: K;
    entry: Extract<WavenerdTextureStoreEntry, { type: K }>;
  };
}[WavenerdTextureStoreEntryType];

interface WavenerdTextureStoreDeleteEvent {
  /**
   * The id of the texture, like `sample_amen`. Shaders refer to the texture by this.
   */
  id: string;
  name: string;
  type: WavenerdTextureStoreEntryType;
}

/**
 * A store of the textures (wavetables, images, samples) used by WavenerdDeck.
 */
export class WavenerdTextureStore {
  /**
   * Its binded `AudioContext`. Used to decode samples.
   */
  public readonly audio: AudioContext;

  private __textures: Map<string, WavenerdTextureStoreEntry>;

  /**
   * The ids of the stored textures, like `sample_amen`.
   */
  public get textureIds(): IterableIterator<string> {
    return this.__textures.keys();
  }

  /**
   * Notified when a texture is loaded.
   */
  public readonly onLoad = new Observable<WavenerdTextureStoreLoadEvent>();

  /**
   * Notified when a texture is deleted.
   */
  public readonly onDelete = new Observable<WavenerdTextureStoreDeleteEvent>();

  /**
   * Notified when {@link dispose} is called.
   */
  public readonly onDispose = new Observable();

  public constructor({ audio }: { audio: AudioContext }) {
    this.audio = audio;
    this.__textures = new Map();
  }

  /**
   * Dispose all the textures.
   */
  public dispose(): void {
    this.__textures.clear();
    this.onDispose.notify();
  }

  /**
   * Get a texture entry by its id, like `sample_amen`.
   */
  public getTextureById(id: string): WavenerdTextureStoreEntry | null {
    return this.__textures.get(id) ?? null;
  }

  /**
   * Load a x-y wavetable and store as a uniform texture.
   * The buffer have to be encoded in F32, 2048 samples per cycle.
   */
  public loadWavetable(name: string, inputBuffer: Float32Array): void {
    // Process the wavetable buffer
    const buffer = new Float32Array(inputBuffer.length * 4);
    for (let i = 0; i < inputBuffer.length; i++) {
      buffer[i * 4 + 0] = inputBuffer[i];
    }

    const entry: WavenerdTextureStoreWavetableEntry = {
      type: 'wavetable',
      meta: [
        2048, // width
        buffer.length / (4 * 2048), // height
        0,
        0,
      ],
      wavetableBuffer: buffer,
    };
    this.__set(name, entry);
  }

  /**
   * Delete a wavetable.
   */
  public deleteWavetable(name: string): void {
    this.__delete('wavetable', name);
  }

  /**
   * Load an image and store as a uniform texture.
   */
  public loadImage(name: string, image: HTMLImageElement): void {
    // Convert image to Uint8Array
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, image.width, image.height);

    const entry: WavenerdTextureStoreImageEntry = {
      type: 'image',
      meta: [
        image.width, // width
        image.height, // height
        0,
        0,
      ],
      imageBuffer: imageData.data,
    };
    this.__set(name, entry);
  }

  /**
   * Delete an image.
   */
  public deleteImage(name: string): void {
    this.__delete('image', name);
  }

  /**
   * Load a sample and store as a uniform texture.
   */
  public async loadSample(name: string, inputBuffer: ArrayBuffer): Promise<void> {
    const audioBuffer = await this.audio.decodeAudioData(inputBuffer);

    // Convert AudioBuffer to Float32Array[]
    const channels = audioBuffer.numberOfChannels;
    const audioData: Float32Array[] = [];

    for (let i = 0; i < channels; i++) {
      audioData.push(audioBuffer.getChannelData(i));
    }

    const entry: WavenerdTextureStoreSampleEntry = {
      type: 'sample',
      meta: [
        2048, // width
        Math.ceil(audioBuffer.length / 2048), // height
        audioBuffer.sampleRate,
        audioBuffer.duration,
      ],
      audioBuffer: audioData,
    };
    this.__set(name, entry);
  }

  /**
   * Delete a sample.
   */
  public deleteSample(name: string): void {
    this.__delete('sample', name);
  }

  private __set(name: string, entry: WavenerdTextureStoreEntry): void {
    const { type } = entry;
    const id = `${type}_${name}`;

    this.__textures.set(id, entry);
    // TS can't tell that `type` and `entry` are correlated, though `type` is taken from `entry`
    this.onLoad.notify({ id, name, type, entry } as WavenerdTextureStoreLoadEvent);
  }

  private __delete(type: WavenerdTextureStoreEntryType, name: string): void {
    const id = `${type}_${name}`;

    if (this.__textures.delete(id)) {
      this.onDelete.notify({ id, name, type });
    }
  }
}
