export interface WavenerdTextureStoreSampleEntry {
  type: 'sample';
  meta: [width: number, height: number, sampleRate: number, duration: number];
  audioBuffer: Float32Array[];
}

export interface WavenerdTextureStoreWavetableEntry {
  type: 'wavetable';
  meta: [width: number, height: number, _: number, _: number];
  wavetableBuffer: Float32Array;
}

export interface WavenerdTextureStoreImageEntry {
  type: 'image';
  meta: [width: number, height: number, _: number, _: number];
  imageBuffer: Uint8ClampedArray;
}

export type WavenerdTextureStoreEntry
  = | WavenerdTextureStoreSampleEntry
    | WavenerdTextureStoreWavetableEntry
    | WavenerdTextureStoreImageEntry;
