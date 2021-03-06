const path = require('path');
/** @type {import('webpack').Configuration} */

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'app.js'),
    path.resolve(__dirname, 'src', 'ui.js'),
    path.resolve(__dirname, 'src', 'github.js') 
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}