const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, './index.js')]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      // 动态加载css
      // {
      //   test: /theme\d\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader/url'
      //     },
      //     {
      //       loader: 'file-loader'
      //     }
      //   ]
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
      // 动态加载卸载css
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader/useable',
      //     },
      //     {
      //       loader: 'css-loader'
      //     }
      //   ]
      // }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../index.html')
    })
  ]
};
