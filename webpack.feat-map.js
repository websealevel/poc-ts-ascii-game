/**
 * Fichier de configuration Webpack pour tester des features
 * de manière isolé
 */

const path = require('path')
const {
  merge,
} = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  entry: {
    app: './features/map/index.ts',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'features/map'),
    clean: true,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './features/map',
  },
})
