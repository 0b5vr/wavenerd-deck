export function fetchS16Wavetable( url ) {
  return fetch( url )
    .then( ( res ) => res.arrayBuffer() )
    .then( ( buffer ) => {
      const s16 = new Int16Array( buffer );
      const f32 = new Float32Array( s16.length );

      for ( let i = 0; i < s16.length; i ++ ) {
        f32[ i ] = s16[ i ] / 32768.0;
      }

      return f32;
    } );
}
