/* eslint-disable */

const BLOCK_SIZE = 128;
const CHANNELS = 2;
const BUFFER_SIZE_PER_CHANNEL = 65536;

class BufferReaderProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this.active = false;
    this.buffer = new Float32Array( CHANNELS * BUFFER_SIZE_PER_CHANNEL );

    this.port.onmessage = ( { data } ) => {
      if ( Array.isArray( data ) ) {
        this.buffer.set( ...data );
      } else {
        this.active = data;
      }
    };
  }

  process( inputs, outputs, parameters ) {
    if ( !this.active ) { return true; }

    const buffer = this.buffer;

    const head = currentFrame % BUFFER_SIZE_PER_CHANNEL;

    outputs[ 0 ].forEach( ( ch, iCh ) => {
      const chHead = BUFFER_SIZE_PER_CHANNEL * iCh + head;
      ch.set( buffer.subarray( chHead, chHead + BLOCK_SIZE ) );
    } );

    this.port.postMessage( currentFrame / BLOCK_SIZE );

    return true;
  }
}

registerProcessor( 'buffer-reader-processor', BufferReaderProcessor );
