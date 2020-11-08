const path = require('path');
const webpack = require('webpack');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: [path.join(__dirname, 'src/index.js')],
  output: {
    filename: 'bundle.[name].[contenthash:8].js',
    path: path.join(__dirname, 'build'),
    publicPath: ASSET_PATH,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [`@babel/preset-react`],
              plugins: [],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 8*1024
              name: 'static/assets/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/assets/',
              name: 'static/assets/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
