import { Pool } from '@0b5vr/experimental';
export interface TFPoolEntry {
    bufferL: WebGLBuffer;
    bufferR: WebGLBuffer;
    tf: WebGLTransformFeedback;
    dstArrays: [
        Float32Array,
        Float32Array
    ];
}
export declare class Renderer {
    readonly gl: WebGL2RenderingContext;
    readonly blocksPerRender: number;
    useSync: boolean;
    readonly __extParallel: any;
    readonly __tfPool: Pool<TFPoolEntry>;
    readonly framesPerRender: number;
    private __offsetBuffer;
    private __program;
    private __programCue;
    constructor(gl: WebGL2RenderingContext, blocksPerRender: number);
    /**
     * Dispose the renderer.
     */
    dispose(): void;
    /**
     * Get a tfPoolEntry.
     */
    getNextTFPoolEntry(): TFPoolEntry;
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
     * Set an uniform1f to the current program.
     */
    uniform1f(name: string, value: number): void;
    /**
     * Set an uniform4f to the current program.
     */
    uniform4f(name: string, ...value: [
        number,
        number,
        number,
        number
    ]): void;
    /**
     * Set a texture uniform to the current program.
     */
    uniformTexture(name: string, unit: number, texture: WebGLTexture): void;
    /**
     * Render and return a buffer.
     */
    render(tfPoolEntry: TFPoolEntry, first: number, count: number): void;
    readBuffer({ bufferL, bufferR, dstArrays }: TFPoolEntry): Promise<void>;
}
