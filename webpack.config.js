const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const includePaths = [path.resolve(__dirname, 'src')];

module.exports = {
  entry: ['./src/main.js', 'webpack-dev-server/client?http://localhost:8080'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: includePaths,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    symlinks: false
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    watchContentBase: true,
    historyApiFallback: true
  },
  devtool: 'source-map'
};
