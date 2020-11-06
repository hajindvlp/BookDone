const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.js/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }, {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 4000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
} 