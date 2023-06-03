import ICell from '@/entities/cell/cell.types'
import IComponent from '@/utils/component.types'
import Layers from '@/view/layers/layers'

export default class CellDrawer implements IComponent {
  constructor(private readonly entity: ICell) {
    //
  }

  awake() {
    //
  }

  draw() {
    Layers.background.drawCell(this.entity)
  }

  update() {
    this.draw()
  }
}
