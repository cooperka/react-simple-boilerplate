const webpack = require('webpack');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors.
    './components',
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      // TODO: Temporary workaround until Sinon works with Webpack.
      sinon: 'sinon/pkg/sinon.js',
    },
  },

  output: {
    path: __dirname + '/build',
    publicPath: '/build',
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
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
    noParse: [
      // TODO: Temporary workaround until Sinon works with Webpack.
      /node_modules\/sinon\//,
    ],
  },

};
