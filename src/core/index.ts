import draw from './render'

/**
 * Met à jour l'état du jeu
 * @param dt number
 * @returns number
 */
function update(dt: number): number {
  return 1
}

/**
 * Gameloop : update, draw, requestFrame
 * @param t
 */
function gameLoop(time: number) {
  // Calcule dt
  // Calcule le dtmax
  // Met a jour l'état du jeu
  // Repeind le canvas
  draw()
  window.requestAnimationFrame(gameLoop)
}

export default function init() {
  window.requestAnimationFrame(gameLoop)
}
