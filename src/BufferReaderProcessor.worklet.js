/* eslint-disable */

const BLOCK_SIZE = 128;
const CHANNELS = 2;
const BUFFER_SIZE_PER_CHANNEL = 65536;

class BufferReaderProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this.active = false;
    this.buffer = new Float32Array( CHANNELS * BUFFER_SIZE_PER_CHANNEL );
    this.frames = 0;

    this.port.onmessage = ( { data } ) => {
      if ( Array.isArray( data ) ) {
        const [buffer, offset] = data;

        // Check if we need to handle wrap-around
        if (offset + buffer.length <= this.buffer.length) {
          // No wrap-around needed
          this.buffer.set( buffer, offset );
        } else {
          // Need to handle wrap-around
          const firstPartSize = this.buffer.length - offset;

          this.buffer.set( buffer.subarray(0, firstPartSize), offset ); // the first part
          this.buffer.set( buffer.subarray(firstPartSize), 0 ); // the second part
        }
      } else {
        this.active = data;
      }
    };
  }

  process( inputs, outputs, parameters ) {
    this.frames += BLOCK_SIZE;

    if ( this.active ) {
      const buffer = this.buffer;
      const head = this.frames % BUFFER_SIZE_PER_CHANNEL;

      outputs[ 0 ].forEach( ( ch, iCh ) => {
        const chHead = BUFFER_SIZE_PER_CHANNEL * iCh + head;
        ch.set( buffer.subarray( chHead, chHead + BLOCK_SIZE ) );
      } );
    }

    this.port.postMessage( this.frames / BLOCK_SIZE );

    return true;
  }
}

registerProcessor( 'buffer-reader-processor', BufferReaderProcessor );
