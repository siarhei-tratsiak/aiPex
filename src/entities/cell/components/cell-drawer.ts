import ICell from '@/entities/cell/cell.types'
import Component from '@/utils/components/component'
import Layers from '@/view/layers/layers'

export default class CellDrawer extends Component {
  constructor(private readonly entity: ICell, { cyclesToUpdate = 0 } = {}) {
    super(cyclesToUpdate)
  }

  draw() {
    Layers.background.drawCell(this.entity)
  }

  protected updateActions() {
    super.updateActions()

    this.draw()
  }
}
