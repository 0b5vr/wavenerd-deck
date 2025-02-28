/**
 * The block size of WebAudio API.
 */
export const BLOCK_SIZE = 128;

/**
 * The number of blocks that will be processed per render call.
 */
export const BLOCKS_PER_RENDER = 16;

/**
 * The number of frames that will be processed per render call.
 */
export const FRAMES_PER_RENDER = BLOCK_SIZE * BLOCKS_PER_RENDER;
