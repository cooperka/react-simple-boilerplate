const webpack = require('webpack');

module.exports = {

  entry: [
    'webpack-hot-middleware/client',
    './views',
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: __dirname + '/build',
    publicPath: '/build',
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      },
    ],
  },

};
