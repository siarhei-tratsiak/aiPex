import ICell from '@/entities/cell/cell.types'
import IView from '@/entities/view.types'
import IComponent from '@/utils/component.types'

export default class CellDrawer implements IComponent {
  entity: ICell | null = null

  constructor(private readonly view: IView) {
    //
  }

  awake() {
    this.draw()
  }

  draw() {
    if (this.entity) this.view.drawCell(this.entity)
  }

  update(/*deltaTime: number*/) {
    throw new Error('Method not implemented.')
  }
}
