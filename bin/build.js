const path = require( 'path' );
const esbuild = require( 'esbuild' );
const packageJson = require( '../package.json' );

// == env ==========================================================================================
const PORT = parseInt( process.env.PORT ?? 3800, 10 );
const SERVE = process.env.SERVE === '1';

// == banner =======================================================================================
const copyright = '(c) 2020-2022 0b5vr';
const licenseName = 'MIT License';
const licenseUri = 'https://github.com/0b5vr/wavenerd-deck/blob/release/LICENSE';

const bannerTextDev = `/*!
* ${ packageJson.name } v${ packageJson.version }
* ${ packageJson.description }
*
* Copyright ${ copyright }
* ${ packageJson.name } is distributed under ${ licenseName }
* ${ licenseUri }
*/`;

const bannerTextProd = `// ${ copyright } - ${ licenseUri }`;

// == build ========================================================================================
function createBuildOptions( format, dev ) {
  const filename = `wavenerd-deck.${ format }${ dev ? '' : '.min' }.js`;

  /** @type {esbuild.BuildOptions} */
  const buildOptions = {
    entryPoints: [ path.resolve( __dirname, '../src/index.ts' ) ],
    bundle: true,
    outfile: path.resolve( __dirname, '../dist', filename ),
    format,
    target: 'es6',
    globalName: 'WAVENERD_DECK',
    sourcemap: true,
    minify: !dev,
    banner: {
      js: dev ? bannerTextDev : bannerTextProd,
    },
    loader: {
      '.worklet.js': 'text'
    },
  };

  return buildOptions;
}

esbuild.build( createBuildOptions( 'iife', true ) );
esbuild.build( createBuildOptions( 'iife', false ) );
esbuild.build( createBuildOptions( 'cjs', true ) );
esbuild.build( createBuildOptions( 'cjs', false ) );
esbuild.build( createBuildOptions( 'esm', true ) );
esbuild.build( createBuildOptions( 'esm', false ) );

// == serve ========================================================================================
if ( SERVE ) {
  esbuild.serve( {
    servedir: path.resolve( __dirname, '..' ),
    port: PORT,
  }, createBuildOptions( 'esm', true ) );

  console.info( `Serving @ http://localhost:${ PORT }` );
}
