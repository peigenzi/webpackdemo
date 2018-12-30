const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './js/page.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ]
};
