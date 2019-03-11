const merge = require('webpack-merge');
const base = require('../config/webpack.base.config.js');
module.exports = merge(base,{
  devServer: {
    contentBase: './dist'
  }
})