import { TextureStoreEntry, TextureStoreImageEntry, TextureStoreSampleEntry, TextureStoreWavetableEntry } from './TextureStoreEntry';

export class TextureStore {
  public readonly gl: WebGL2RenderingContext;

  private __textures: Map<string, TextureStoreEntry>;

  public get textureIds(): IterableIterator<string> {
    return this.__textures.keys();
  }

  public constructor( gl: WebGL2RenderingContext ) {
    this.gl = gl;

    this.__textures = new Map();
  }

  /**
   * Dispose all the textures.
   */
  public dispose(): void {
    const { gl } = this;

    this.__textures.forEach( ( texture ) => {
      gl.deleteTexture( texture.texture );
    } );

    this.__textures.clear();
  }

  /**
   * Get a texture.
   */
  public get( id: string ): TextureStoreEntry | null {
    return this.__textures.get( id ) ?? null;
  }

  /**
   * Load a x-y wavetable and store as a texture.
   * The buffer have to be encoded in F32, 2048 samples per cycle.
   *
   * The texture name is gonna be `wavetable_${ name }`.
   */
  public loadWavetable( id: string, inputBuffer: Float32Array ): TextureStoreWavetableEntry {
    const frames = inputBuffer.length / 2048;
    const buffer = new Float32Array( inputBuffer.length * 4 );

    for ( let i = 0; i < inputBuffer.length; i ++ ) {
      buffer[ i * 4 + 0 ] = inputBuffer[ i ];
    }

    const texture = this.__uploadTexture( 2048, frames, buffer );

    const entry = {
      type: 'wavetable' as const,
      width: 2048,
      height: frames,
      texture,
    };
    this.__textures.set( id, entry );
    return entry;
  }

  /**
   * Load an image and store as a texture.
   */
  public loadImage( id: string, image: TexImageSource ): TextureStoreImageEntry {
    const texture = this.__uploadImageSource( image );

    const entry = {
      type: 'image' as const,
      width: image.width,
      height: image.height,
      texture,
    };
    this.__textures.set( id, entry );
    return entry;
  }

  /**
   * Load a sample and store as a texture.
   */
  public loadSample( id: string, audioBuffer: AudioBuffer ): TextureStoreSampleEntry {
    const { sampleRate, duration } = audioBuffer;
    const frames = audioBuffer.length;
    const width = 2048;
    const lengthCeiled = Math.ceil( frames / 2048.0 );
    const height = lengthCeiled;

    const buffer = new Float32Array( width * height * 4 );
    const channels = audioBuffer.numberOfChannels;

    const dataL = audioBuffer.getChannelData( 0 );
    const dataR = audioBuffer.getChannelData( channels === 1 ? 0 : 1 );

    for ( let i = 0; i < frames; i ++ ) {
      buffer[ i * 4 + 0 ] = dataL[ i ];
      buffer[ i * 4 + 1 ] = dataR[ i ];
    }

    const texture = this.__uploadTexture( width, height, buffer );

    const entry = {
      type: 'sample' as const,
      width,
      height,
      sampleRate,
      duration,
      texture,
    };
    this.__textures.set( id, entry );
    return entry;
  }

  /**
   * Delete a texture entry.
   *
   * Returns a boolean that indicates whether the deletion is successful or not.
   */
  public delete( id: string ): boolean {
    const { gl } = this;

    const texture = this.__textures.get( id );
    if ( texture == null ) { return false; }

    gl.deleteTexture( texture.texture );
    this.__textures.delete( id );

    return true;
  }

  /**
   * Create a texture and upload data.
   */
  private __uploadTexture(
    width: number,
    height: number,
    source: Float32Array,
  ): WebGLTexture {
    const { gl } = this;

    const texture = gl.createTexture()!;

    gl.bindTexture( gl.TEXTURE_2D, texture );

    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA32F,
      width,
      height,
      0,
      gl.RGBA,
      gl.FLOAT,
      source,
    );

    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );

    gl.bindTexture( gl.TEXTURE_2D, null );

    return texture;
  }

  /**
   * Create a texture and upload data.
   */
  private __uploadImageSource(
    source: TexImageSource,
  ): WebGLTexture {
    const { gl } = this;

    const texture = gl.createTexture()!;

    gl.bindTexture( gl.TEXTURE_2D, texture );

    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA8,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      source,
    );

    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR );

    gl.bindTexture( gl.TEXTURE_2D, null );

    return texture;
  }
}
