import ICell from '@/entities/cell/cell.types'
import CreatureDrawer from '@/entities/creature/components/creature-drawer'
import GrowManager from '@/entities/creature/components/grow-manager'
import ICreature from '@/entities/creature/creature.types'
import Entity from '@/utils/entity/entity'

export default class Creature extends Entity implements ICreature {
  weight = 1

  constructor(public cell: ICell, weight?: number) {
    super()

    this.weight = weight ?? this.weight
  }

  awake() {
    this.addComponent(new CreatureDrawer(this))
    this.addComponent(new GrowManager(this, { updatesPerCycle: 1 }))

    super.awake()
  }

  grow(value: number) {
    this.weight += value
  }
}
