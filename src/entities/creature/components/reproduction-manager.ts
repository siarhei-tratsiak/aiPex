import ICreature from '@/entities/creature/creature.types'
import Component from '@/utils/components/component'
import ICoords from '@/utils/coords/coords.types'

export default class ReproductionManager extends Component {
  constructor(private readonly entity: ICreature, { cyclesToUpdate = 1 } = {}) {
    super(cyclesToUpdate)
  }

  protected updateActions() {
    super.updateActions()

    this.reproduct(this.getRandomCoords())
  }

  private getRandomCoords() {
    const choice = Math.floor(Math.random() * 4)

    let left = 0
    let top = 0

    switch (choice) {
      case 0:
        top = 1
        break
      case 1:
        left = -1
        break
      case 3:
        top = -1
        break
      case 4:
        left = 1
    }

    const x = this.entity.cell.coords.x + top
    const y = this.entity.cell.coords.y + left

    return { x, y }
  }

  private reproduct(coords: ICoords) {
    this.entity.weight /= 2
    this.entity.field.addCreature(coords, this.entity.weight)
  }
}
