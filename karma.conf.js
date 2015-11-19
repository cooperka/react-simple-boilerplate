const webpackConfig = require('./webpack.config');

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],

    frameworks: ['mocha', 'sinon-chai'],

    files: [
      '**/__tests__/*.js?',
    ],

    preprocessors: {
      '**/__tests__/*.js?': ['webpack', 'sourcemap'],
    },

    webpack: {
      resolve: webpackConfig.resolve,
      devtool: webpackConfig.devtool,
      module: webpackConfig.module,
    },

    webpackServer: {
      // Don't spam the console.
      noInfo: true,
    },
  });
};
