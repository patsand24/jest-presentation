module.exports = {
  entry: './src/index.js',
  output: {
    filename: './src/bundle.js'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        use : ['babel-loader']
      }
    ]
  }
};