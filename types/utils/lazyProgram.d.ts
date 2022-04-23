export declare function lazyProgram(gl: WebGL2RenderingContext, vert: string, frag: string, options?: {
    /**
     * `KHR_parallel_shader_compile`.
     * Compile async if provided.
     */
    extParallel?: any;
    tfVaryings?: string[];
    /**
     * `gl.SEPARATE_ATTRIBS` by default
     */
    tfBufferMode?: number;
}): Promise<WebGLProgram>;
