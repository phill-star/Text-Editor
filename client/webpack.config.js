const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],
    plugins: [
      // Adding Webpack plugin to generate HTML and inject our bundles
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE'
      }),
      // TODO: Add and configure workbox plugins for a service worker and manifest file.
      // service worker
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      // manifest.json
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'text-editor',
        short_name: 'JATE',
        description: 'Just Another Text Editor!',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],
  }};
