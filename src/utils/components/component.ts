import { IUpdate } from '@/utils/lifecycle.types'

export default class Component implements IUpdate {
  protected canBeUpdated = false
  protected passedCycles = 0

  constructor(private readonly cyclesToUpdate = 0) {
    //
  }

  awake() {
    //
  }

  update(isTimeToStartNewCycle: boolean) {
    if (this.cyclesToUpdate === 0) {
      this.updateActions()
    } else if (isTimeToStartNewCycle) {
      this.passedCycles++

      if (this.cyclesToUpdate === this.passedCycles) {
        this.updateActions()
      }
    }
  }

  protected updateActions() {
    this.passedCycles = 0
  }
}
