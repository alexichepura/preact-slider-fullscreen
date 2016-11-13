const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'slider.js',
    library: 'Slider',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude: 'node_modules',
      options: {
        presets: ['react']
      }
    }],
  },
  devServer: {
    contentBase: 'example',
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      path.resolve(__dirname, 'node_modules'),
    ]),
   ]
}

module.exports = config