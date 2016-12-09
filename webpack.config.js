const path = require('path')
const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV
const IS_PROD = NODE_ENV === 'production'

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
        plugins: [
          ['transform-react-jsx', { pragma: 'h' }]
        ]
      }
    }],
  },
  devServer: {
    contentBase: 'example',
    noInfo: true,
    publicPath: "/dist/",
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      path.resolve(__dirname, 'node_modules'),
    ]),
   ]
}

if (IS_PROD) {
  const BabiliPlugin = require('babili-webpack-plugin')
  config.plugins.push(
    new BabiliPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  )
}

module.exports = config