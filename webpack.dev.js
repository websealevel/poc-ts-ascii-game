/**
 * Fichier de configuration Webpack pour l'environnement de dev
 */

// Grâce à webpack-merge on importe la config commune et on peut override
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
})
