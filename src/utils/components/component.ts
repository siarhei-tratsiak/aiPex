import settings from '@/settings'
import { IUpdate } from '@/utils/lifecycle.types'

export default class Component implements IUpdate {
  protected canBeUpdated = false

  private lastTimestamp: number

  constructor(private readonly updatesPerCycle = 0) {
    this.lastTimestamp = Date.now()
  }

  awake() {
    //
  }

  update() {
    this.canBeUpdated = this.checkUpdate()

    if (this.canBeUpdated) {
      this.updateActions()
    }
  }

  protected updateActions() {
    this.lastTimestamp = Date.now()
  }

  private checkUpdate() {
    const timeInterval = Date.now() - this.lastTimestamp
    const updateInterval = settings.cycle.length / this.updatesPerCycle

    return this.updatesPerCycle === 0 || timeInterval >= updateInterval
  }
}
