const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, './index.js')
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
}