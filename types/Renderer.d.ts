export declare class Renderer {
    readonly gl: WebGL2RenderingContext;
    readonly blocksPerRender: number;
    readonly __extParallel: any;
    get framesPerRender(): number;
    private __offsetBuffer;
    private __tfBuffers;
    private __transformFeedback;
    private __program;
    private __programCue;
    private __textures;
    private __dstArrays;
    constructor(gl: WebGL2RenderingContext, blocksPerRender: number);
    /**
     * Dispose the renderer.
     */
    dispose(): void;
    /**
     * Compile given shader code and cue the shader.
     */
    compile(code: string): Promise<void>;
    /**
     * Apply the cue shader.
     *
     * It does not do nothing when cue is not set.
     * Feel free to mash this method for no reason.
     */
    applyCue(): void;
    /**
     * Create a texture and upload data.
     */
    uploadTexture(textureName: string, width: number, height: number, source: Float32Array): void;
    /**
     * Create a texture and upload data.
     */
    uploadImageSource(textureName: string, source: TexImageSource): void;
    /**
     * Delete a texture entry.
     */
    deleteTexture(textureName: string): void;
    /**
     * Set an uniform1f to the current program.
     */
    uniform1f(name: string, value: number): void;
    /**
     * Set an uniform4f to the current program.
     */
    uniform4f(name: string, ...value: [number, number, number, number]): void;
    /**
     * Set a texture uniform to the current program.
     */
    uniformTexture(name: string, unit: number): void;
    /**
     * Render and return a buffer.
     */
    render(first: number, count: number): Promise<[Float32Array, Float32Array]>;
    private __createOffsetBuffer;
    private __createTFBuffer;
    private __createTransformFeedback;
}
