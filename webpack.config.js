const path = require('path');
const webpack = require('webpack');
const ReactStaticPlugin = require('react-static-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const devServerConfig = {
  // TODO: Colors still aren't showing up
  colors: true,
  quiet: false,
  noInfo: false,
  contentBase: 'client/public',
  publicPath: '/build',
  host: 'localhost',
  port: 3000,
  hot: true,
  historyApiFallback: true,
};

module.exports = {

  entry: {
    app: [
      './client/components',
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      // TODO: Temporary workaround until Sinon works with Webpack.
      sinon: 'sinon/pkg/sinon.js',
    },
  },

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build',
    filename: '[name].js',
  },

  devtool: 'inline-source-map',

  devServer: devServerConfig,

  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new ReactStaticPlugin({
      routes: './client/static-utils/routes.jsx',
      template: './client/static-utils/template.jsx',
      reduxStore: './client/static-utils/configureStore.js',
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap'),
      },
    ],
    noParse: [
      // TODO: Temporary workaround until Sinon works with Webpack.
      /node_modules\/sinon\//,
    ],
  },

};
