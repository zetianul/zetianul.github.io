const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanDistPlugin = require('./plugins/cleanDistPlugin');

const { GenerateSW } = require('workbox-webpack-plugin')


module.exports = {
  entry: './src/index.tsx',
  output:{
    path : path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },
  devServer: {
    contentBase: './dist',
    port: 9010,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json', '.less'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    } 
  },
  plugins:[
    new CleanDistPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
      inject: 'body'
    }),
    // new GenerateSW({
    // })
  ],
  module:{
    rules: [
      {
        test: /.(css|less)$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader',
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