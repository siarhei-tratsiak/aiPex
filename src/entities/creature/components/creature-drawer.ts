import ICreature from '@/entities/creature/creature.types'
import IComponent from '@/utils/component.types'
import CanvasLayer from '@/view/canvas-layer'

export default class CreatureDrawer implements IComponent {
  constructor(private readonly entity: ICreature) {
    //
  }

  awake() {
    //
  }

  draw() {
    CanvasLayer.foreground.drawCreature(this.entity)
  }

  update() {
    this.draw()
  }
}
