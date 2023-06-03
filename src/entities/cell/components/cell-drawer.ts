import ICell from '@/entities/cell/cell.types'
import IComponent from '@/utils/component.types'
import CanvasLayer from '@/view/canvas-layer'

export default class CellDrawer implements IComponent {
  constructor(private readonly entity: ICell) {
    //
  }

  awake() {
    //
  }

  draw() {
    CanvasLayer.background.drawCell(this.entity)
  }

  update() {
    this.draw()
  }
}
