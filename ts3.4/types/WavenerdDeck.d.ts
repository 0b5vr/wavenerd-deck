import { BeatManager } from './BeatManager';
import { EventEmittable } from './utils/EventEmittable';
export declare class WavenerdDeck {
    /**
     * Its host deck.
     * It's highly recommended to connect the node of the host deck into the node of this deck, to ensure the timing consistency.
     */
    hostDeck?: WavenerdDeck;
    /**
     * The count of latency blocks.
     * Block == 128 samples.
     * Lower == less latency.
     */
    latencyBlocks: number;
    /**
     * Its current cue status.
     * `'none'`: There is nothing in its current cue.
     * `'ready'`: There is a cue shader and is ready to be applied.
     * `'applying'`: There is a cue shader and is going to be applied in the next bar.
     */
    private __cueStatus;
    /*
    * Its current cue status.
    * `'none'`: There is nothing in its current cue.
    * `'ready'`: There is a cue shader and is ready to be applied.
    * `'applying'`: There is a cue shader and is going to be applied in the next bar.
    */
    readonly cueStatus: 'none' | 'compiling' | 'ready' | 'applying';
    /**
     * Blocks per a render.
     */
    private __blocksPerRender;
    /*
    * Blocks per a render.
    */
    readonly blocksPerRender: number;
    /*
    * Frames per a render
    */
    readonly framesPerRender: number;
    /**
     * Whether the wavenerd deck is playing or not.
     */
    private __isPlaying;
    /*
    * Whether the wavenerd deck is playing or not.
    */
    readonly isPlaying: boolean;
    /*
    * Its current bpm.
    */
    bpm: number;
    /**
     * Its last updated time.
     * Intended to be used for calculation of deltaTime inside (@link __prepareBuffer).
     */
    private __lastUpdatedTime;
    /**
     * Its renderer.
     */
    private __renderer;
    /**
     * Its last compile error happened in [[WavenerdDeck.compile]].
     */
    private __lastError;
    readonly lastError: any;
    /**
     * Its binded `AudioContext`.
     */
    private __audio;
    readonly audio: AudioContext;
    /**
     * Its node of the AudioContext.
     */
    private __node;
    readonly node: GainNode;
    private __bufferReaderNode?;
    private __bufferWriteBlocks;
    /**
     * Offset of the block compared to {@link __bufferWriteBlocks} in terms of time.
     * It is used to rewind the deck.
     */
    private __blockOffset;
    /*
    * Alias for the `audio.sampleRate` .
    */
    readonly sampleRate: number;
    private __beatManager;
    readonly beatManager: BeatManager;
    private __program;
    private __programCue;
    private __programSwapTime;
    private __params;
    private readonly params: any;
    private __selfTextureStore;
    private readonly __textureStore: any;
    /**
     * Constructor of the WavenerdDeck.
     */
    constructor({ gl, audio, hostDeck, latencyBlocks, blocksPerRender, bpm, }: {
        gl: WebGL2RenderingContext;
        audio: AudioContext;
        hostDeck?: WavenerdDeck;
        latencyBlocks?: number;
        blocksPerRender?: number;
        bpm?: number;
    });
    /**
     * Dispose this WavenerdDeck.
     */
    dispose(): void;
    /**
     * Play the deck.
     */
    play(): void;
    /**
     * Pause the deck.
     */
    pause(): void;
    /**
     * Rewind the deck.
     */
    rewind(): void;
    /**
     * Compile given shader code and cue the shader.
     */
    compile(code: string): Promise<void>;
    /**
     * Apply the cue shader after the bar ends.
     */
    applyCue(): void;
    /**
     * Apply the cue shader immediately.
     */
    applyCueImmediately(): void;
    /**
     * Set a uniform value.
     */
    setParam(name: string, value: number, factor?: number): void;
    /**
     * Load a x-y wavetable and store as a uniform texture.
     * The buffer have to be encoded in F32, 2048 samples per cycle.
     */
    loadWavetable(name: string, inputBuffer: Float32Array): void;
    /**
     * Delete a wavetable.
     */
    deleteWavetable(name: string): void;
    /**
     * Load an image and store as a uniform texture.
     */
    loadImage(name: string, image: TexImageSource): void;
    /**
     * Delete an image.
     */
    deleteImage(name: string): void;
    /**
     * Load a sample and store as a uniform texture.
     */
    loadSample(name: string, inputBuffer: ArrayBuffer): Promise<void>;
    /**
     * Delete a sample.
     */
    deleteSample(name: string): void;
    update(): Promise<void>;
    private __addRequiredTexture;
    private __prepareBuffer;
    private __setCueStatus;
    private __processErrorMessage;
}
export interface WavenerdDeck extends EventEmittable<{
    update: void;
    play: void;
    pause: void;
    rewind: void;
    changeCueStatus: {
        cueStatus: 'none' | 'compiling' | 'ready' | 'applying';
    };
    setParam: {
        name: string;
        value: number;
        factor: number;
    };
    loadWavetable: {
        name: string;
    };
    deleteWavetable: {
        name: string;
    };
    loadImage: {
        name: string;
    };
    deleteImage: {
        name: string;
    };
    loadSample: {
        name: string;
        sampleRate: number;
        duration: number;
    };
    deleteSample: {
        name: string;
    };
    changeBPM: {
        bpm: number;
    };
    error: {
        error: string | null;
    };
}> {
}
