const webpack = require("webpack");

function modifyBabelLoader(loader) {
  if (loader.loader === 'babel-loader') {
    loader.options = {
      babelrc: false,
      presets: [
        [ "es2015", { modules: false } ],
        "stage-0",
        "react",
      ],
      plugins: [
        "react-hot-loader/babel"
      ],
    };
  }

  return loader;
}

module.exports = require('./webpack.config.js');

module.exports.devServer.hot = true;

module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports.entry.unshift(
  'react-hot-loader/patch',
  'webpack/hot/only-dev-server',
  'webpack-dev-server/client?http://0.0.0.0:8080',
);

module.exports.module.loaders = module.exports.module.loaders.map(function cb(value) {
  if (value.use instanceof Array) {
    value.use = value.use.map(modifyBabelLoader);
  } else if (value.use instanceof String) {
    value.use = modifyBabelLoader(value.use);
  }

  return value;
});
