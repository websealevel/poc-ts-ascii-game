# Ascii-game

Projet de jeu en ASCII, HTML5/TypeScript

# Servir le projet

`npm run start`

# Build le projet

`npm run build`

# Tests unitaires

Jest

`npm run test`

# Librairies notables

- (Ramda)[https://ramdajs.com/] : lib fonctionnelle
- (Reatom)[https://reatom.js.org/#/] : gestionnaire d'état

# Features : env isolés

Pour tester des fonctionnalités dans des environnements isolés (ex: carte, système d'inventaire...), tout en gardant une codebase unique, on utilise
des bundlers (fichiers de config webpacks) spécifiques. 

Pour chaque env isolé/feature `{feature}`, on doit fournir :

- un fichier de config webpack `webpack.feat-{feature}.js`. Importer le fichier `webpack.dev.js` et changer le point d'entré et le point de sortie
```

const path = require('path')
const {
  merge,
} = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  entry: {
    app: './src/features/{feature}/index.ts',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'features/{feature}'),
    clean: true,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './features/{feature}',
  },
})
```
- un point d'entré dans le path des sources `./src/features/{feature}/index.ts`
- un path de sortie pour le build `./features/{feature}/`
- [optionel] ajouter deux scripts dans le `package.json` : 
    - `"build-feature-{feature}": "webpack --config webpack.feat-{feature}.js"`
    - `"start-feature-{feature}": "webpack serve --open --config webpack.feat-{feature}.js"`

Ainsi chaque environnement isolé aura un bundle dédié (avec uniquement les dépendances nécessaires). Les sources seront automatiquement montées sur un fichier d'entrée html.