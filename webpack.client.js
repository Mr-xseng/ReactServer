const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const config = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(config,baseConfig)


