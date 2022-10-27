import { TextureStoreEntry, TextureStoreImageEntry, TextureStoreSampleEntry, TextureStoreWavetableEntry } from './TextureStoreEntry';
export declare class TextureStore {
    readonly gl: WebGL2RenderingContext;
    private __textures;
    get textureIds(): IterableIterator<string>;
    constructor(gl: WebGL2RenderingContext);
    /**
     * Dispose all the textures.
     */
    dispose(): void;
    /**
     * Get a texture.
     */
    get(id: string): TextureStoreEntry | null;
    /**
     * Load a x-y wavetable and store as a texture.
     * The buffer have to be encoded in F32, 2048 samples per cycle.
     *
     * The texture name is gonna be `wavetable_${ name }`.
     */
    loadWavetable(id: string, inputBuffer: Float32Array): TextureStoreWavetableEntry;
    /**
     * Load an image and store as a texture.
     */
    loadImage(id: string, image: TexImageSource): TextureStoreImageEntry;
    /**
     * Load a sample and store as a texture.
     */
    loadSample(id: string, audioBuffer: AudioBuffer): TextureStoreSampleEntry;
    /**
     * Delete a texture entry.
     *
     * Returns a boolean that indicates whether the deletion is successful or not.
     */
    delete(id: string): boolean;
    /**
     * Create a texture and upload data.
     */
    private __uploadTexture;
    /**
     * Create a texture and upload data.
     */
    private __uploadImageSource;
}
