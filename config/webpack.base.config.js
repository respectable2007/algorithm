const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
//   devServer: {
//     contentBase: './dist'
//   },
  plugins:[
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}