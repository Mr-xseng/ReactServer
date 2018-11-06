const path = require('path')
module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public')
  }, 
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react', 'stage-0', ['env',{
            targets: {
              browsers: ['last 2 versions']
            }
          }]]
        }
      }
    ]
  }
}


