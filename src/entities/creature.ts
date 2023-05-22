export default class Creature {
  img: string
  posX: number | null = null
  posY: number | null = null

  constructor(img: string) {
    this.img = img
  }
}
