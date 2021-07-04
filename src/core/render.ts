import canvas from './state'

/**
 *Peint sur le canvas
 */
export default function draw() {
  const ctx = canvas.getContext('2d')
  if (ctx == null) return false
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  return true
}
