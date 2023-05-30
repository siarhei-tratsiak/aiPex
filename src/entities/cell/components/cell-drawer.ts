import ICell from '@/entities/cell/cell.types'
import IComponent from '@/utils/component.types'
import CanvasLayer from '@/view/canvas-layer'

export default class CellDrawer implements IComponent {
  entity: ICell | null = null

  constructor() {
    //
  }

  awake() {
    this.draw()
  }

  draw() {
    if (this.entity) CanvasLayer.background.drawCell(this.entity)
  }

  update(/*deltaTime: number*/) {
    throw new Error('Method not implemented.')
  }
}
