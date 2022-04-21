import banner from 'vite-plugin-banner';
import { defineConfig } from 'vite';
import packageJson from './package.json';
import { resolve } from 'path';

const bannerStr = `${ packageJson.name } v${ packageJson.version }
${ packageJson.description }
Copyright (c) 2019 ${ packageJson.author }
${ packageJson.name } is distributed under the MIT License
https://opensource.org/licenses/MIT
Repository: ${ packageJson.repository.url }`;

// https://vitejs.dev/config/
export default defineConfig( {
  build: {
    lib: {
      entry: resolve( __dirname, 'src/index.ts' ),
      name: 'WAVENERD_DECK',
      fileName: ( format ) => `wavenerd-deck.${ format }.js`,
    }
  },
  plugins: [
    banner( bannerStr )
  ],
} );
