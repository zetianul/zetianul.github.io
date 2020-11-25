const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output:{
    path : path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /.(css|less)$/,
        use:[
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options:{
            presets: ['@babel/react', '@babel/preset-env']
          }
        }]
      }
    ]
  }
}