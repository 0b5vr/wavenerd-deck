import { BeatManager } from './BeatManager';
import { GLCat } from '@fms-cat/glcat-ts';
import { EventEmittable } from './utils/EventEmittable';
export declare class WavenerdDeck {
    /**
     * Threshold of time error, in seconds.
     */
    timeErrorThreshold: number;
    /**
     * Its host deck.
     * It's highly recommended to connect the node of the host deck into the node of this deck, to ensure the timing consistency.
     */
    hostDeck?: WavenerdDeck;
    /**
     * Its current cue status.
     * `'none'`: There is nothing in its current cue.
     * `'ready'`: There is a cue shader and is ready to be applied.
     * `'applying'`: There is a cue shader and is going to be applied in the next bar.
     */
    private __cueStatus;
    get cueStatus(): 'none' | 'compiling' | 'ready' | 'applying';
    /**
     * Its buffer size.
     */
    private __bufferSize;
    get bufferSize(): number;
    /**
     * Its chunk size.
     */
    private __chunkSize;
    get chunkSize(): number;
    private __chunkHead;
    /**
     * Its current bpm.
     */
    get bpm(): number;
    set bpm(value: number);
    /**
     * Its current time.
     */
    private __time;
    get time(): number;
    /**
     * Its bound `GLCat`.
     */
    private __glCat;
    get glCat(): GLCat;
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
    get node(): ScriptProcessorNode;
    /**
     * Alias for the `audio.sampleRate` .
     */
    get sampleRate(): number;
    private __beatManager;
    get beatManager(): BeatManager;
    private __bufferQuad;
    private __framebufferTexture;
    private __framebuffer;
    private __program;
    private __programCue;
    private __pixelBuffer;
    private __samples;
    private get samples();
    /**
     * Constructor of the WavenerdDeck.
     */
    constructor({ glCat, audio, hostDeck, bufferSize, chunkSize, bpm, timeErrorThreshold }: {
        glCat: GLCat;
        audio: AudioContext;
        hostDeck?: WavenerdDeck;
        bufferSize?: number;
        chunkSize?: number;
        bpm?: number;
        timeErrorThreshold?: number;
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
     * Load a sample and store as a uniform texture.
     */
    loadSample(name: string, buffer: ArrayBuffer): Promise<void>;
    /**
     * Delete a sample.
     */
    deleteSample(name: string): void;
    private __handleProcess;
    private __prepareBuffer;
    private __setCueStatus;
    private __processErrorMessage;
}
export interface WavenerdDeck extends EventEmittable<{
    process: void;
    changeCueStatus: {
        cueStatus: 'none' | 'compiling' | 'ready' | 'applying';
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
