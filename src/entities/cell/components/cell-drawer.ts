import ICell from '@/entities/cell/cell.types'
import Component from '@/utils/components/component'
import Layers from '@/view/layers/layers'

export default class CellDrawer extends Component {
  constructor(private readonly entity: ICell, { updatesPerCycle = 0 } = {}) {
    super(updatesPerCycle)
  }

  draw() {
    Layers.background.drawCell(this.entity)
  }

  protected updateActions() {
    super.updateActions()

    this.draw()
  }
}
