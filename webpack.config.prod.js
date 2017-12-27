const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // entry: {
  //   app: [
  //     './client/public/index.js',
  //   ]
  // },
  entry: path.resolve(__dirname +'/client/public/index.js'),

  output: {
    path: path.resolve(__dirname + '/client/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname + '/client/dist')]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname + '/client/public/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      {
        test: /\.mp4$/,
        loader: 'url-loader'
      }
    ]
  }
};
