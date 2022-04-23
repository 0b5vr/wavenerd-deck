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
    get cueStatus(): 'none' | 'compiling' | 'ready' | 'applying';
    /**
     * Blocks per a render.
     */
    private __blocksPerRender;
    get blocksPerRender(): number;
    /**
     * Frames per a render
     */
    get framesPerRender(): number;
    /**
     * Its current bpm.
     */
    get bpm(): number;
    set bpm(value: number);
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
    get lastError(): any;
    /**
     * Its binded `AudioContext`.
     */
    private __audio;
    get audio(): AudioContext;
    /**
     * Its node of the AudioContext.
     */
    private __node;
    get node(): GainNode;
    private __bufferReaderNode?;
    private __bufferWriteBlocks;
    /**
     * Alias for the `audio.sampleRate` .
     */
    get sampleRate(): number;
    private __beatManager;
    get beatManager(): BeatManager;
    private __program;
    private __programCue;
    private __programSwapTime;
    private __params;
    private get params();
    private __samples;
    private get samples();
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
     * Compile given shader code and cue the shader.
     */
    compile(code: string): Promise<void>;
    /**
     * Apply the cue shader after the bar ends.
     */
    applyCue(): void;
    /**
     * Set a uniform value.
     */
    setParam(name: string, value: number, factor?: number): void;
    /**
     * Load a sample and store as a uniform texture.
     */
    loadSample(name: string, inputBuffer: ArrayBuffer): Promise<void>;
    /**
     * Delete a sample.
     */
    deleteSample(name: string): void;
    update(): Promise<void>;
    private __prepareBuffer;
    private __setCueStatus;
    private __processErrorMessage;
}
export interface WavenerdDeck extends EventEmittable<{
    update: void;
    changeCueStatus: {
        cueStatus: 'none' | 'compiling' | 'ready' | 'applying';
    };
    loadSample: {
        name: string;
        sampleRate: number;
        duration: number;
    };
    setParam: {
        name: string;
        value: number;
        factor: number;
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
