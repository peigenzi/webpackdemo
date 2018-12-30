const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlConfig = function(name, title) {
  return {
    template: path.resolve(__dirname, `./${name}.html`),
    filename: `view/${name}.html`,
    title: title,
    chunks: ['common', name]
  };
};

module.exports = {
  entry: {
    pagea: path.resolve(__dirname, './js/pagea.js'),
    pageb: path.resolve(__dirname, './js/pageb.js')
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './'),
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(htmlConfig('pagea', 'a页面')),
    new HtmlWebpackPlugin(htmlConfig('pageb', 'b页面'))
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, './pagea.html'),
    //   filename: 'pagea.html',
    //   chunks: ['common', 'pagea']
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, './pageb.html'),
    //   filename: 'pageb.html'
    // })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
          minSize: 1,
          priority: 0
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10
        }
      }
    }
  }
};
