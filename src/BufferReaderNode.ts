import processorCode from './BufferReaderProcessor.worklet.js';

const CHANNELS = 2;

const processorBlob = new Blob([processorCode], { type: 'text/javascript' });
const processorUrl = URL.createObjectURL(processorBlob);

export class BufferReaderNode extends AudioWorkletNode {
  private __underrun: boolean;

  public get underrun(): boolean {
    return this.__underrun;
  }

  public static addModule(audio: AudioContext): Promise<void> {
    return audio.audioWorklet.addModule(processorUrl);
  }

  public setActive(isActive: boolean): void {
    this.port.postMessage(isActive);
  }

  public constructor(audio: AudioContext) {
    super(audio, 'buffer-reader-processor', {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [CHANNELS],
    });

    this.port.onmessage = ({ data }) => {
      this.__underrun = data;
      console.log(this.__underrun);
    };
  }

  public write(channel: number, block: number, buffer: Float32Array): void {
    this.port.postMessage([channel, block, buffer], [buffer.buffer]);
  }
}
