const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    app: './entry.js',
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    disableHostCheck: true,
    port: 8000,
    host: 'localhost',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'react-photo-gallery': path.resolve(__dirname, 'src/Gallery'),
    },
  },
};
