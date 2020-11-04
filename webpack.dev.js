const { merge } = require('webpack-merge');
const EslintPlugin = require('eslint-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    inline: false,
    historyApiFallback: true,
    overlay: true,
    port: 3000,
  },
  plugins: [new EslintPlugin()],
});
