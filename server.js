require('dotenv').config({ path: 'variables.env' });
const path = require('path');
const express = require('express');
const historyApiFallback = require('connect-history-api-fallback');

const app = express();

const routes = require('./server/routes/index');

const DEFAULT_PORT = 3000;

const env = process.env.NODE_ENV || 'NOT DEFINED';

app.set("port", process.env.PORT || DEFAULT_PORT);
app.use(express.static(path.join(__dirname, '/client/dist')));

if(env == 'development'){
  console.log("================================================>")
  console.log('Sever running in DEVELOPMENT MODE');

  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.dev.js');
  const compiler = webpack(config);

  app.use(historyApiFallback({
    verbose: false
  }));

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: config.output.publicPath,
    chunks: false,
    'errors-only': true,
    stats: {
      colors: true
    }
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));

}else{
  console.log('Server running in PRODUCTION MODE');
}

app.use('/api', routes);
// app.use('/api', (req, res) => {
//   console.log('in server')
// })

app.get('*', (req, res) => {
  console.log('got request');
  // console.log(req);
  var clientHostname = req.headers.host;
  console.log('Hostname: ' + clientHostname);
  res.sendFile(__dirname + '/client/dist/index.html');
});

// Serve the files on port 3000.
app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!\n');
});
