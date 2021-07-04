interface canvasConfiguration{
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

/**
 * Applique les paramètres au canvas et retourne un nouveau canvas
 * @param canvas
 * @param parameters
 * @returns
 */
const apply = (canvas: HTMLCanvasElement,
  parameters: canvasConfiguration): HTMLCanvasElement => {
  const canvasParametrized = canvas
  canvasParametrized.width = parameters.width
  canvasParametrized.height = parameters.height
  return canvas
}

const configuration = () => defaultConfiguration()

/**
 * Cree un élément HTML Canvas, applique les paramètres
 * et retourne l'élément
 * @param document
 * @returns
 */
const createCanvas = (document: Document): HTMLCanvasElement => apply(document.createElement('canvas'), configuration())

export default createCanvas
