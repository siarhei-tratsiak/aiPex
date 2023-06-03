import ICell from '@/entities/cell/cell.types'
import CellDrawer from '@/entities/cell/components/cell-drawer'
import ICreature from '@/entities/creature/creature.types'
import Entity from '@/utils/entity/entity'

export default class Cell extends Entity implements ICell {
  creature: ICreature | null = null

  constructor(readonly x: number, readonly y: number) {
    super()
  }

  awake() {
    this.addComponent(new CellDrawer(this))
    super.awake()
    this.creature?.awake()
  }
}
