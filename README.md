# data structures and algorithms
## ES6/7 to ES5
  npm install babel-loader babel-core babel-preset-env --save-dev<br>
  babel-loader@7.x install babel-core@6.x / babel-loader@8.x install babel-core@7.x<br>
  webpack.base.config.js<br>
  ```
  {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: [{
      loader: 'babel-loader'
    }]
  }
  ```
  don't need file .babelrc
## css modules + scss
  npm install style-loader css-loader sass-loader node-sass --save-dev<br>
  webpack.base.config.js<br>
  ```
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
  ```  
  ## javascript data structure and algorithms
  sample stack<br>
  sample queue<br>
  sample linked-list<br>
  sample BST<br>
  sample 二叉树找出给定两个节点的最近公共父节点<br>

  ## data structure and algorithms exercises
  example1 双排序好的数组重排序，时间复杂度尽量低<br>
  example2 两数之和<br>
  example3 整数反转<br>