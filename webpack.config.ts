/* eslint-env node */

import packageJson from './package.json';
import path from 'path';
import webpack from 'webpack';

export default ( env: any, argv: any ): webpack.Configuration => {
  const VERSION = packageJson.version;
  const PROD = argv.mode === 'production';
  console.info( `Webpack: Building ${packageJson.name} ${VERSION} under ${argv.mode} mode...` );

  const banner = PROD
    ? `${packageJson.name} v${VERSION} - (c) ${packageJson.author}, MIT License`
    : `${packageJson.name} v${VERSION}
${packageJson.description}

Copyright (c) 2019 ${packageJson.author}
${packageJson.name} is distributed under the MIT License
https://opensource.org/licenses/MIT

Repository: ${packageJson.repository.url}`;

  return {
    target: 'web',
    entry: path.resolve(
      __dirname,
      'src/index.ts'
    ),
    output: {
      path: path.join( __dirname, 'dist' ),
      filename: PROD ? 'index.min.js' : 'index.js',
      library: 'WaveNerdEngine',
      libraryExport: 'default',
      libraryTarget: 'umd',
      globalObject: 'this'
    },
    resolve: {
      extensions: [ '.js', '.json', '.ts' ],
    },
    module: {
      rules: [
        { test: /\.(glsl|frag|vert)$/, use: [ 'raw-loader' ] },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            }
          ]
        },
      ],
    },
    optimization: {
      minimize: PROD
    },
    devServer: {
      contentBase: path.resolve( __dirname, './' ),
      publicPath: '/dist/',
      openPage: 'example/example.html',
      watchContentBase: true,
      inline: true,
      hot: true
    },
    devtool: PROD ? false : 'inline-source-map',
    plugins: [
      new webpack.BannerPlugin( banner ),
      new webpack.DefinePlugin( {
        'process.env': {
          PROD,
          VERSION: `"${VERSION}"`
        },
      } ),
    ],
  };
};
