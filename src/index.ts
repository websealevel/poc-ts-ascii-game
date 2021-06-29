import {
  declareAction, declareAtom, map, createStore,
} from '@reatom/core'
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

// Test Reatom (encore qq issues)

/** Actions */
const increment = declareAction()
const add = declareAction()

/** Atoms */
const countAtom = declareAtom(1, (on) => [
  on(increment, (state) => state + 1),
  on(add, (state, payload) => state + payload),
])
const isOddAtom = map(countAtom, (count) => Boolean(count % 2))

/** Store */
const store = createStore()

store.subscribe(countAtom, (count) => console.log('`count` state: ', count))
store.subscribe(isOddAtom, (isOdd) => console.log('`isOdd` state: ', isOdd))
store.subscribe(add, (payload) => console.log('`add` payload: ', payload))

store.dispatch(increment())
// `count` state: 2
// `isOdd` state: false

store.dispatch(add(2))
// `count` state: 4
// `add` payload: 2
// here `isOdd` subscriber will not be called because its value is not changed
