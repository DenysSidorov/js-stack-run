module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/www',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './www'
  }
};