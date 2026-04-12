export interface TextureStoreSampleEntry {
  type: 'sample';
  meta: [width: number, height: number, sampleRate: number, duration: number];
  audioBuffer: Float32Array[];
}

export interface TextureStoreWavetableEntry {
  type: 'wavetable';
  meta: [width: number, height: number, _: number, _: number];
  wavetableBuffer: Float32Array;
}

export interface TextureStoreImageEntry {
  type: 'image';
  meta: [width: number, height: number, _: number, _: number];
  imageBuffer: Uint8ClampedArray;
}

export type TextureStoreEntry
  = | TextureStoreSampleEntry
    | TextureStoreWavetableEntry
    | TextureStoreImageEntry;
