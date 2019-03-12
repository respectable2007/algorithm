const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
        test: /\.scss$/,
        exclude: path.resolve(__dirname,'./src/styles'),
        use: [{
            loader: 'style-loader'
        },{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]--[hash:base64:5]'
            }
        },{
            loader: 'sass-loader'
        }]
    },{
        test: /\.scss$/,
        include: path.resolve(__dirname,'./src/styles'),
        use: [{
            loader: 'style-loader'
        },{
            loader: 'css-loader'
        },{
            loader: 'sass-loader'
        }]
    },{
      test: /\.js$/,
      exclude: /(node_modules|dist)/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  plugins:[
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}