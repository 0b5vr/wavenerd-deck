export declare class BufferReaderNode extends AudioWorkletNode {
    private __readBlocks;
    readonly readBlocks: number;
    static addModule(audio: AudioContext): Promise<void>;
    constructor(audio: AudioContext);
    write(channel: number, block: number, offset: number, buffer: ArrayLike<number>): void;
}