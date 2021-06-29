import init from './core/index'

const R = require('ramda')

function componentCanvas() {
  const canvas = document.createElement('canvas')
  canvas.width = 1224
  canvas.height = 768
  return canvas
}

document.body.appendChild(componentCanvas())
init()

// Test Ramda
console.log(R.add(2, 5))
