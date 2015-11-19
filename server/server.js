const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('../webpack.config');

const host = 'localhost';
const port = 3000;

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  contentBase: 'public',
  historyApiFallback: true,
}).listen(port, host, (err, result) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at ' + host + ':' + port);
});
