const webpackConfig = require('./webpack.config');

module.exports = {

  module: {
    devtool: webpackConfig.devtool,
    loaders: webpackConfig.module.loaders,
  },

};
