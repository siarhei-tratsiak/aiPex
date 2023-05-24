export default class Creature {
  readonly img: string
  posX: number | null = null
  posY: number | null = null
  weight = 1

  constructor(img: string, weight?: number) {
    this.img = img

    if (weight) {
      this.weight = weight
    }
  }

  grow() {
    this.weight += 0.1
  }
}
