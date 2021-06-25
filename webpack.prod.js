/**
 * Fichier de configuration Webpack pour l'environnement de prod(livrable)
 */

const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
})
