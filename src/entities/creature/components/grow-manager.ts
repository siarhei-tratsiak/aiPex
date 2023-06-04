import ICreature from '@/entities/creature/creature.types'
import settings from '@/settings'
import IComponent from '@/utils/component.types'

export default class GrowManager implements IComponent {
  private lastTimestamp: number

  private readonly growSpeed: number
  private readonly updatesPerCycle: number

  constructor(
    private readonly entity: ICreature,
    { growSpeed = 0.1, updatesPerCycle = 0 } = {}
  ) {
    this.lastTimestamp = Date.now()
    this.growSpeed = growSpeed
    this.updatesPerCycle = updatesPerCycle
  }

  awake() {
    //
  }

  update() {
    if (this.canBeUpdated()) {
      this.lastTimestamp = Date.now()
      this.entity.grow(this.growSpeed)
    }
  }

  private canBeUpdated() {
    const timeInterval = Date.now() - this.lastTimestamp
    const updateInterval = settings.cycle.length / this.updatesPerCycle

    return this.updatesPerCycle === 0 || timeInterval >= updateInterval
  }
}
