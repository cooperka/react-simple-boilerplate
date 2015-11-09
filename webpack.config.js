module.exports = {

  entry: "./src/hello-world.js",

  output: {
    path: __dirname + '/build',
    filename: "bundle.js",
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
    ],
  },

};
