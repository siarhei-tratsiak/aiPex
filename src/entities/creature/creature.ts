import ICreature from '@/entities/creature/creature.types'

export default class Creature implements ICreature {
  posX: number | null = null
  posY: number | null = null
  weight = 1

  constructor(weight?: number) {
    if (weight) {
      this.weight = weight
    }
  }

  grow() {
    this.weight += 0.1
  }
}
