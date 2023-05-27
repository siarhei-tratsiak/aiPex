import Entity from '@/utils/entity/entity'

export default class Game extends Entity {
  private lastTimestamp = 0

  update() {
    const deltaTime = (Date.now() - this.lastTimestamp) / 1000

    super.update(deltaTime)

    this.lastTimestamp = Date.now()

    window.requestAnimationFrame(() => this.update())
  }
}
