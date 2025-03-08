/* eslint-disable */

const BLOCK_SIZE = 128;
const CHANNELS = 2;
const BLOCKS_PER_CHANNEL = 256;
const FRAMES_PER_CHANNEL = BLOCK_SIZE * BLOCKS_PER_CHANNEL;

class BufferReaderProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this.active = false;
    this.buffer = new Float32Array(CHANNELS * FRAMES_PER_CHANNEL);
    this.blocks = 0;
    this.written = 0;
    this.underrun = false;

    this.port.onmessage = ({ data }) => {
      if (Array.isArray(data)) {
        const [channel, block, buffer] = data;
        this.storeBuffer(channel, block, buffer);
      } else {
        this.active = data;
      }
    };
  }

  process(inputs, outputs, parameters) {
    if (this.active) {
      const underrun = this.written <= this.blocks;
      this.setUnderrun(underrun);

      if (!underrun) {
        const buffer = this.buffer;
        const frame = (this.blocks * BLOCK_SIZE) % FRAMES_PER_CHANNEL;

        outputs[0].forEach((ch, iCh) => {
          const chHead = FRAMES_PER_CHANNEL * iCh;
          ch.set(buffer.subarray(chHead + frame, chHead + frame + BLOCK_SIZE));
        });
      }
    }

    this.blocks += 1;

    return true;
  }

  storeBuffer(channel, block, buffer) {
    const frame = (block % BLOCKS_PER_CHANNEL) * BLOCK_SIZE;
    const chHead = FRAMES_PER_CHANNEL * channel;

    // Check if we need to handle wrap-around
    if (frame + buffer.length <= FRAMES_PER_CHANNEL) {
      // No wrap-around needed
      this.buffer.set(buffer, chHead + frame);
    } else {
      // Need to handle wrap-around
      const firstPartFrames = FRAMES_PER_CHANNEL - frame;

      this.buffer.set(buffer.subarray(0, firstPartFrames), chHead + frame); // the first part
      this.buffer.set(buffer.subarray(firstPartFrames), chHead); // the second part
    }

    this.written = block + buffer.length / BLOCK_SIZE;
  }

  setUnderrun(underrun) {
    if (this.underrun !== underrun) {
      this.underrun = underrun;
      this.port.postMessage(underrun);
    }
  }
}

registerProcessor('buffer-reader-processor', BufferReaderProcessor);
