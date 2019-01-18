module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/www',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    // to serve the files from
    contentBase: './www'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};