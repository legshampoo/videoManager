require('dotenv').config({ path: 'variables.env' });

const express = require('express');

const app = express();

const DEFAULT_PORT = 3000;

const env = process.env.NODE_ENV || 'NOT DEFINED';

app.set("port", process.env.PORT || DEFAULT_PORT);
app.use(express.static('client/dist'));

if(env == 'development'){
  console.log('Sever running in DEVELOPMENT MODE');

  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.dev.js');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: config.output.publicPath,
    contentBase: './dist',
    stats: {
      colors: true
    }
  }));

  app.use(webpackHotMiddleware(compiler));

}else{
  console.log('Server running in PRODUCTION MODE');
}

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/dist/index.html');
})

// Serve the files on port 3000.
app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!\n');
});
