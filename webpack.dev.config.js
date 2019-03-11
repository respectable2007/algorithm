const path = require('path');
module.exports={
  entry: './src/index.js',
  outpus: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist');
  }
}