export interface TextureStoreSampleEntry {
    type: 'sample';
    width: number;
    height: number;
    sampleRate: number;
    duration: number;
    texture: WebGLTexture;
}
export interface TextureStoreWavetableEntry {
    type: 'wavetable';
    width: number;
    height: number;
    texture: WebGLTexture;
}
export interface TextureStoreImageEntry {
    type: 'image';
    width: number;
    height: number;
    texture: WebGLTexture;
}
export declare type TextureStoreEntry = TextureStoreSampleEntry | TextureStoreWavetableEntry | TextureStoreImageEntry;
