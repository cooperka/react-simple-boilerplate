const webpack = require('webpack');

const devServerConfig = {
  // TODO: Colors still aren't showing up
  colors: true,
  quiet: false,
  noInfo: false,
  contentBase: 'public',
  publicPath: '/build/',
  host: 'localhost',
  port: 3000,
  hot: true,
  historyApiFallback: true,
};

module.exports = {

  entry: [
    'webpack-dev-server/client?http://' + devServerConfig.host + ':' + devServerConfig.port,
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

  devServer: devServerConfig,

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
