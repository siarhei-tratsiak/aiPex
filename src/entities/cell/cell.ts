import ICell from '@/entities/cell/cell.types'
import CellDrawer from '@/entities/cell/components/cell-drawer'
import Entity from '@/utils/entity/entity'

export default class Cell extends Entity implements ICell {
  constructor(readonly x: number, readonly y: number) {
    super()
  }

  awake() {
    this.addComponent(new CellDrawer(this))
    super.awake()
  }
}
