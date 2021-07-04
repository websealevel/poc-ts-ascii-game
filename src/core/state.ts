import createCanvas from './canvas'

/**
 * Etat global du jeu (A déplacer dans un store(transaction) plus tard)
 */

// Canvas : fenetre de rendu graphique de l'état du jeu/zone d'interaction avec le joueur
const canvas: HTMLCanvasElement = createCanvas(document)
export default canvas
