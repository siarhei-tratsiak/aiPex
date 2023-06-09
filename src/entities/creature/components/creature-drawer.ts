import ICreature from '@/entities/creature/creature.types'
import Component from '@/utils/components/component'
import Layers from '@/view/layers/layers'

export default class CreatureDrawer extends Component {
  constructor(private readonly entity: ICreature, { cyclesToUpdate = 0 } = {}) {
    super(cyclesToUpdate)
  }

  draw() {
    Layers.foreground.drawCreature(this.entity)
  }

  protected updateActions() {
    super.updateActions()

    this.draw()
  }
}
