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
        this.buffer.set( ...data );
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
