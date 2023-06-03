import ICell from '@/entities/cell/cell.types'
import CreatureDrawer from '@/entities/creature/components/creature-drawer'
import ICreature from '@/entities/creature/creature.types'
import Entity from '@/utils/entity/entity'

export default class Creature extends Entity implements ICreature {
  weight = 1

  constructor(public cell: ICell, weight?: number) {
    super()

    if (weight) {
      this.weight = weight
    }
  }

  awake() {
    this.addComponent(new CreatureDrawer(this))
    super.awake()
  }

  grow() {
    this.weight += 0.1
  }
}
