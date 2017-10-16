const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const app_root = './src';

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'js/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
    ],
  },
  devServer: {
    contentBase: './static',
    inline: true,
  },
  plugins: [
    new CleanWebpackPlugin(__dirname + '/public'),
    new ExtractTextWebpackPlugin('css/main.css'),
    new HtmlWebpackPlugin({
      title: 'Simple app build with redux-minimal',
      template: './src/index.ejs',
      favicon: './media/favicon.ico',
    }),
  ],
};
