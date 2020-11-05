/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const common = require('./webpack.common.js');

const config = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    hot: true,
    contentBase: './build',
    historyApiFallback: true,
    port: 3000,
    watchOptions: {
      ignored: ['node_modules'],
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
});
config.module.rules[1].use[0].options.plugins = [
  require.resolve('react-refresh/babel'),
].filter(Boolean);
module.exports = config;
