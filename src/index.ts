import * as R from 'ramda'
import init from './core/index'
import canvas from './core/state/canvas'

document.body.appendChild(canvas)
init()

// Test Ramda
console.log(R.add(2, 5))
