import { configuration, canvasConfiguration } from '../configuration/canvas'

/**
 * Etat global : Canvas ( A déplacer dans un store(transaction) plus tard)
 */

/**
 * Applique les paramètres au canvas et retourne un nouveau canvas
 * Effet de bord !
 * @param canvas
 * @param parameters
 * @returns
 */
const apply = (canvas: HTMLCanvasElement,
  parameters: canvasConfiguration): HTMLCanvasElement => {
  const canvasParametrized = canvas

  canvasParametrized.width = parameters.width
  canvasParametrized.height = parameters.height

  return canvasParametrized
}

/**
   * Cree un élément HTML Canvas, applique les paramètres
   * et retourne l'élément
   * @param document
   * @returns
   */
const createCanvas = (document: Document): HTMLCanvasElement => apply(document.createElement('canvas'), configuration())

// Canvas : fenetre de rendu graphique de l'état du jeu/zone d'interaction avec le joueur
const canvas: HTMLCanvasElement = createCanvas(document)
export default canvas
