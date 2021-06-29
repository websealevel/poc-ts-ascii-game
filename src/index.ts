import init from './core/index'

function componentCanvas() {
  const canvas = document.createElement('canvas')
  canvas.width = 1224
  canvas.height = 768
  return canvas
}

document.body.appendChild(componentCanvas())
init()
