export interface canvasConfiguration{
  width: number,
  height: number,
}

/**
 * Retourne les paramètres par défaut du canvas
 * @returns canvasParameters
 */
const defaultConfiguration = () : canvasConfiguration => ({
  width: 1024,
  height: 768,
})

export const configuration = () => defaultConfiguration()
