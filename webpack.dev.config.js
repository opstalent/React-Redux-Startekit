const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const app_root = './src';
const webpack = require('webpack');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
        exclude: /node_modules(\/webpack-dev-server)/,
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
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
    })
  ],
};

module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
