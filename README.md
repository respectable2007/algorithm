# data structures and algorithms
# ES6/7
  npm install babel-loader babel-core babel-preset-env --save-dev
  babel-loader@7.x install babel-core@6.x / babel-loader@8.x install babel-core@7.x
  webpack.config.js
  {
    test: /\.js$/,
    use: [{
      loader: 'babel-loader'
    }]
  }
  don't need file .babelrc