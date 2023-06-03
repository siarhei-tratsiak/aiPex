import ICreature from '@/entities/creature/creature.types'
import Entity from '@/utils/entity/entity'

export default class Creature extends Entity implements ICreature {
  posX: number | null = null
  posY: number | null = null
  weight = 1

  constructor(weight?: number) {
    super()

    if (weight) {
      this.weight = weight
    }
  }

  grow() {
    this.weight += 0.1
  }
}
