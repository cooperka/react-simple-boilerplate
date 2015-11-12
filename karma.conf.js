const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],

    frameworks: ['mocha'],

    files: [
      'tests.webpack.js',
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: webpackConfig.devtool,
      module: webpackConfig.module,
    },

    webpackServer: {
      // Don't spam the console.
      noInfo: true,
    },
  });
};
