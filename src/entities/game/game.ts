import Field from '@/entities/field/field'
import settings from '@/settings'
import Entity from '@/utils/entity/entity'
import CanvasLayer from '@/view/canvas-layer'

export default class Game extends Entity {
  entities: Entity[] = []

  private readonly awakeCallback = () => {
    this.lastTimestamp = Date.now()
    this.update()
  }
  private lastTimestamp = 0

  awake() {
    super.awake()

    this.entities.push(new Field(settings.field.height, settings.field.width))
    this.entities.forEach((entity) => entity.awake())
    // Make sure Update starts after all entities are awaken
    this.runBeforeRepaint(this.awakeCallback)
  }

  runBeforeRepaint(callback: FrameRequestCallback) {
    window.requestAnimationFrame(callback)
  }

  update() {
    const deltaTime = Date.now() - this.lastTimestamp

    this.runBeforeRepaint(() => this.update())

    this.lastTimestamp = Date.now()
    CanvasLayer.background.clearRect()
    super.update(deltaTime)
    this.entities.forEach((entity) => entity.update(deltaTime))
    CanvasLayer.background.ctx.stroke()
  }
}
