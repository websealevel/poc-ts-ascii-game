import { add } from 'ramda'

test('basic', () => {
  expect(1 + 2).toBe(3)
})

test('ramda', () => {
  const add7 = add(7)
  expect(add7(2)).toBe(9)
})
