import Entity from '@/utils/entity/entity'

export default class Game extends Entity {
  entities: Entity[] = []

  private lastTimestamp = 0

  awake() {
    super.awake()

    this.entities.forEach((entity) => entity.awake())

    // Make sure Update starts after all entities are awaken
    window.requestAnimationFrame(() => {
      this.lastTimestamp = Date.now()
      this.update()
    })
  }

  update() {
    const deltaTime = (Date.now() - this.lastTimestamp) / 1000

    super.update(deltaTime)

    this.entities.forEach((entity) => entity.update(deltaTime))

    this.lastTimestamp = Date.now()

    window.requestAnimationFrame(() => this.update())
  }
}
