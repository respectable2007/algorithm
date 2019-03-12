# data structures and algorithms
# ES6/7
  npm install babel-loader babel-core babel-preset-env --save-dev
  babel-loader@7.x install babel-core@6.x / babel-loader@8.x install babel-core@7.x
  webpack.base.config.js
  {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: [{
      loader: 'babel-loader'
    }]
  }
  don't need file .babelrc
# css modules + scss
  npm install style-loader css-loader sass-loader node-sass --save-dev
  webpack.base.config.js
  {
    test: /\.scss$/,
    exclude: path.resolve(__dirname, './src/styles'),
    use: [{
      loader: 'style-loader'
    },{
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[name]-[local]-[hash:base64:5]'
      }
    },{
      loader: 'sass-loader'
    }]
  },{
    test: /\.scss$/,
    include: path.resolve(__dirname, './src/styles'),
    use:[{
      loader: 'style-loader'
    },{
      loader: 'css-loader'
    },{
      loader: 'sass-loader'
    }]
  }
  