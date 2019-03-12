const merge = require('webpack-merge');
const base = require('../config/webpack.base.config.js');
// const webpack = require('webpack');
module.exports = merge(base,{
  mode: 'production'
//   ,
//   plugins:[
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('production')
//     })
//   ]
})