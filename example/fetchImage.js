export function fetchImage( url ) {
  return new Promise( ( resolve, reject ) => {
    const img = new Image();

    img.onload = () => {
      resolve( img );
    };

    img.onerror = ( error ) => {
      reject( 'Error loading image.' );
    };

    img.src = url;
  } );
}
