const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
//   hot: true,
//   filename: 'bundle.js',
//   stats: {
//     colors: true,
//   },
//   historyApiFallback: true
// }));


app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  contentBase: './dist'
}));

// app.use(webpackHotMiddleware)(compiler, {
//   log: console.log,
//   path: '/__webpack_hmr',
//   heartbeat: 10*1000,
// });

app.use(webpackHotMiddleware(compiler));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on portz 3000!\n');
});

process.once('SIGUSR2', function(){
  process.kill(process.pid, 'SIGUSR2');
});
