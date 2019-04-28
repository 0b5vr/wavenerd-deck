import { GLCat, GLCatBuffer, GLCatProgram } from '@fms-cat/glcat-ts';

const vertQuad = `attribute vec2 p;
void main() {
  gl_Position = vec4( p, 0.0, 1.0 );
}
`;

export class WaveNerdEngine {
  public __gl: WebGLRenderingContext;
  public __glCat: GLCat;
  public __vboQuad: GLCatBuffer;
  public __program: GLCatProgram | null = null;
  public __beginTime: number;
  public __pixelBuffer: Float32Array;

  /**
   * Constructor of the WaveNerd engine.
   */
  public constructor( gl: WebGLRenderingContext ) {
    this.__gl = gl;
    this.__glCat = new GLCat( this.__gl );
    this.__vboQuad = this.__glCat.createBuffer()!;
    this.__vboQuad.setVertexbuffer( new Float32Array( [ -1, -1, 1, -1, -1, 1, 1, 1 ] ) );
    this.__beginTime = Date.now();
    this.__pixelBuffer = new Float32Array( 512 * 4 );
  }

  /**
   * Compile given shader. Returns error or `null`.
   */
  public compile( frag: string ): any {
    try {
      const newProgram = this.__glCat.lazyProgram( vertQuad, frag );

      if ( newProgram ) {
        const prevProgram = this.__program;
        this.__program = newProgram;

        if ( prevProgram ) {
          prevProgram.getShaders()!.forEach( ( shader ) => shader.dispose() );
          prevProgram.dispose();
        }

        this.__glCat.useProgram( this.__program );
      }
    } catch ( e ) {
      return e;
    }

    return null;
  }
}