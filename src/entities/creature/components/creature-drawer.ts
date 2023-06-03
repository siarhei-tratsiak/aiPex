import ICreature from '@/entities/creature/creature.types'
import IComponent from '@/utils/component.types'
import Layers from '@/view/layers/layers'

export default class CreatureDrawer implements IComponent {
  constructor(private readonly entity: ICreature) {
    //
  }

  awake() {
    //
  }

  draw() {
    Layers.foreground.drawCreature(this.entity)
  }

  update() {
    this.draw()
  }
}
