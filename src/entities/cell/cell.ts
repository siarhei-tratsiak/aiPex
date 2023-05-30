import ICell from '@/entities/cell/cell.types'
import CellDrawer from '@/entities/cell/components/cell-drawer'
import Entity from '@/utils/entity/entity'
import IView from '@/view/view.types'

export default class Cell extends Entity implements ICell {
  constructor(
    private readonly view: IView,
    readonly x: number,
    readonly y: number
  ) {
    super()
  }

  awake() {
    this.addComponent(new CellDrawer(this.view))
    super.awake()
  }
}
