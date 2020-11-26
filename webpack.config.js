const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output:{
    path : path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json', '.less'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    } 
  },
  plugins:[
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: './index.html',
        inject: 'body'
      })
  ],
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
            presets: ['@babel/preset-typescript', '@babel/react', '@babel/preset-env']
          }
        }]
      }
    ]
  },
  // optimization:{
  //   minimize: false
  // }
}