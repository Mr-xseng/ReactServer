const path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const config =  {
  target: 'node',
  entry: './src/server/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()]
}
module.exports = merge(config, baseConfig)


