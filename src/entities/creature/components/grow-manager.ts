import ICreature from '@/entities/creature/creature.types'
import Component from '@/utils/components/component'

export default class GrowManager extends Component {
  private readonly growSpeed: number

  constructor(
    private readonly entity: ICreature,
    { growSpeed = 0.1, updatesPerCycle = 1 } = {}
  ) {
    super(updatesPerCycle)
    this.growSpeed = growSpeed
  }

  updateActions() {
    super.updateActions()

    this.entity.grow(this.growSpeed)
  }
}
