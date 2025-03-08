/* eslint-disable */

const BLOCK_SIZE = 128;
const CHANNELS = 2;
const BLOCKS_PER_CHANNEL = 256;
const FRAMES_PER_CHANNEL = BLOCK_SIZE * BLOCKS_PER_CHANNEL;

class BufferReaderProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this.active = false;
    this.buffer = new Float32Array( CHANNELS * FRAMES_PER_CHANNEL );
    this.frames = 0;

    this.port.onmessage = ( { data } ) => {
      if ( Array.isArray( data ) ) {
        const [channel, block, buffer] = data;
        const frame = (block % BLOCKS_PER_CHANNEL) * BLOCK_SIZE;
        const chHead = FRAMES_PER_CHANNEL * channel;

        // Check if we need to handle wrap-around
        if (frame + buffer.length <= FRAMES_PER_CHANNEL) {
          // No wrap-around needed
          this.buffer.set( buffer, chHead + frame );
        } else {
          // Need to handle wrap-around
          const firstPartFrames = FRAMES_PER_CHANNEL - frame;

          this.buffer.set( buffer.subarray(0, firstPartFrames), chHead + frame ); // the first part
          this.buffer.set( buffer.subarray(firstPartFrames), chHead ); // the second part
        }
      } else {
        this.active = data;
      }
    };
  }

  process( inputs, outputs, parameters ) {
    if ( this.active ) {
      const buffer = this.buffer;
      const frame = this.frames % FRAMES_PER_CHANNEL;

      outputs[ 0 ].forEach( ( ch, iCh ) => {
        const chHead = FRAMES_PER_CHANNEL * iCh;
        ch.set( buffer.subarray( chHead + frame, chHead + frame + BLOCK_SIZE ) );
      } );
    }

    this.frames += BLOCK_SIZE;

    return true;
  }
}

registerProcessor( 'buffer-reader-processor', BufferReaderProcessor );
