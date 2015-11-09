const webpack = require('webpack');

module.exports = {

  entry: [
    'webpack-hot-middleware/client',
    './src/app.js',
  ],

  output: {
    path: __dirname + '/build',
    publicPath: '/build',
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },

};
