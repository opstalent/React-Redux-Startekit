const webpack = require("webpack");
module.exports = require('./webpack.config.js');

module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compressor: {
      warnings: false,
    },
  }),
);
