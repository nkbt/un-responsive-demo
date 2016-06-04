process.env.PORT = process.env.PORT || 3000;

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  compress: true,
  stats: {
    colors: true,
    hash: true,
    timings: true,
    chunks: false
  }
}).listen(`1${process.env.PORT}`, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Webpack dev server is listening at localhost: 1${process.env.PORT}`);
});
