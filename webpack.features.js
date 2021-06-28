/**
 * Fichier de configuration Webpack pour tester des features
 * de manière isolé
 */

const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

common.entry = {
  app: './src/features/map.ts',
}

common.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'features'),
  clean: true,
}

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './features',
  },
})
