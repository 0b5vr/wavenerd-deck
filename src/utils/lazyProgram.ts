export function lazyProgram(
  gl: WebGL2RenderingContext,
  vert: string,
  frag: string,
  options: {
    /**
     * `KHR_parallel_shader_compile`.
     * Compile async if provided.
     */
    extParallel?: any,

    tfVaryings?: string[],

    /**
     * `gl.SEPARATE_ATTRIBS` by default
     */
    tfBufferMode?: number,
  } = {},
): Promise<WebGLProgram> {
  const { extParallel, tfVaryings, tfBufferMode } = options;

  let vertexShader: WebGLShader | null = null;
  let fragmentShader: WebGLShader | null = null;
  let program: WebGLProgram | null = null;

  try {
    // == vert =====================================================================================
    vertexShader = gl.createShader( gl.VERTEX_SHADER )!;

    gl.shaderSource( vertexShader, vert );
    gl.compileShader( vertexShader );

    if ( !gl.getShaderParameter( vertexShader, gl.COMPILE_STATUS ) ) {
      throw new Error( gl.getShaderInfoLog( vertexShader ) ?? undefined );
    }

    // == frag =====================================================================================
    fragmentShader = gl.createShader( gl.FRAGMENT_SHADER )!;

    gl.shaderSource( fragmentShader, frag );
    gl.compileShader( fragmentShader );

    if ( !gl.getShaderParameter( fragmentShader, gl.COMPILE_STATUS ) ) {
      throw new Error( gl.getShaderInfoLog( fragmentShader ) ?? undefined );
    }

    // == program ==================================================================================
    program = gl.createProgram()!;

    gl.attachShader( program, vertexShader );
    gl.attachShader( program, fragmentShader );

    if ( tfVaryings ) {
      gl.transformFeedbackVaryings(
        program,
        tfVaryings,
        tfBufferMode ?? gl.SEPARATE_ATTRIBS,
      );
    }

    gl.linkProgram( program );

    return new Promise( ( resolve, reject ) => {
      const update = () => {
        if (
          !extParallel ||
          gl.getProgramParameter( program!, extParallel.COMPLETION_STATUS_KHR ) === true
        ) {
          if ( !gl.getProgramParameter( program!, gl.LINK_STATUS ) ) {
            gl.deleteProgram( program );
            reject( new Error( gl.getProgramInfoLog( program! ) ?? undefined ) );
          } else {
            resolve( program! );
          }

          return;
        }

        setTimeout( update, 10 );
      };
      update();
    } );
  } catch ( e ) {
    gl.deleteProgram( program );

    return Promise.reject( e );
  } finally {
    gl.deleteShader( fragmentShader );
    gl.deleteShader( vertexShader );
  }
}
