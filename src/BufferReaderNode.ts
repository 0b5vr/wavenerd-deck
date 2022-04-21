const BLOCK_SIZE = 128;
const CHANNELS = 2;
const BUFFER_SIZE_PER_CHANNEL = 65536;

const processorCode = `
const BLOCK_SIZE = 128;
const CHANNELS = 2;
const BUFFER_SIZE_PER_CHANNEL = 65536;

class BufferReaderProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this.blocks = 0;
    this.buffer = new Float32Array( CHANNELS * BUFFER_SIZE_PER_CHANNEL );

    this.port.onmessage = ( { data } ) => {
      this.buffer.set( ...data );
    };
  }

  process( inputs, outputs, parameters ) {
    const buffer = this.buffer;
    if ( buffer == null ) { return true; }

    const head = ( BLOCK_SIZE * this.blocks ) % BUFFER_SIZE_PER_CHANNEL;

    outputs[ 0 ].forEach( ( ch, iCh ) => {
      const chHead = BUFFER_SIZE_PER_CHANNEL * iCh + head;
      ch.set( buffer.subarray( chHead, chHead + BLOCK_SIZE ) );
    } );

    this.blocks ++;

    this.port.postMessage( this.blocks );

    return true;
  }
}

registerProcessor( 'buffer-reader-processor', BufferReaderProcessor );
`;

const processorBlob = new Blob( [ processorCode ], { type: 'text/javascript' } );
const processorUrl = URL.createObjectURL( processorBlob );

export class BufferReaderNode extends AudioWorkletNode {
  private __readBlocks: number;

  public get readBlocks(): number {
    return this.__readBlocks;
  }

  public static addModule( audio: AudioContext ): Promise<void> {
    return audio.audioWorklet.addModule( processorUrl );
  }

  public constructor( audio: AudioContext ) {
    super( audio, 'buffer-reader-processor', {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [ CHANNELS ],
    } );

    this.__readBlocks = 0;

    this.port.onmessage = ( ( { data } ) => {
      this.__readBlocks = data;
    } );
  }

  public write( channel: number, block: number, offset: number, buffer: ArrayLike<number> ): void {
    const totalOffset = (
      BUFFER_SIZE_PER_CHANNEL * channel
      + ( BLOCK_SIZE * block ) % BUFFER_SIZE_PER_CHANNEL
      + offset
    );
    this.port.postMessage( [ buffer, totalOffset ] );
  }
}
