import dtmax from './time'

/**
 * Met à jour l'état du jeu
 * @param dt number
 * @returns number
 */
function update(dt: number): number {
  return 1
}

/**
 *Peint sur le canvas
 */
function draw() {

}

function gameLoop(t: number) {
  const dt = dtmax(t)
  update(dt)
  draw()
  window.requestAnimationFrame(gameLoop)
}

export default function init() {
  window.requestAnimationFrame(gameLoop)
}
