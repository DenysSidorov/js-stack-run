const webpack = require('webpack');
// const path = require('path');

// const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: `${__dirname}/www`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // htmlWebpackPlugin
  ],
  devServer: {
    // to serve the files from
    contentBase: './www',
    hot: true,
  },
};
