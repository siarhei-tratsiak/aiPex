import ICell from '@/entities/cell/cell.types'
import CreatureDrawer from '@/entities/creature/components/creature-drawer'
import GrowManager from '@/entities/creature/components/grow-manager'
import ReproductionManager from '@/entities/creature/components/reproduction-manager'
import ICreature from '@/entities/creature/creature.types'
import IField from '@/entities/field/field.types'
import Entity from '@/utils/entity/entity'

export default class Creature extends Entity implements ICreature {
  weight = 1

  constructor(public cell: ICell, public field: IField, weight?: number) {
    super()

    this.weight = weight ?? this.weight
  }

  awake() {
    super.awake()

    super.addComponents(
      { CreatureDrawer, GrowManager, ReproductionManager },
      'Creature'
    )
  }

  grow(value: number) {
    this.weight += value
  }
}
