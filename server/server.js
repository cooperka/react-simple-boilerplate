const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('../webpack.config');

const host = webpackConfig.devServer.host;
const port = webpackConfig.devServer.port;

const server = new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer);

server.listen(port, host, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at ' + host + ':' + port);
});
