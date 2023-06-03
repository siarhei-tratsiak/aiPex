import Field from '@/entities/field/field'
import settings from '@/settings'
import Assets from '@/utils/assets/assets'
import Entity from '@/utils/entity/entity'
import Layers from '@/view/layers/layers'

export default class Game extends Entity {
  assets: Assets | null = null
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

    this.assets = new Assets()
    this.assets.onload(() => this.runBeforeRepaint(this.awakeCallback))
  }

  runBeforeRepaint(callback: FrameRequestCallback) {
    window.requestAnimationFrame(callback)
  }

  update() {
    const deltaTime = Date.now() - this.lastTimestamp

    this.runBeforeRepaint(() => this.update())

    this.lastTimestamp = Date.now()
    Layers.background.clearRect()
    Layers.foreground.clearRect()
    super.update(deltaTime)
    this.entities.forEach((entity) => entity.update(deltaTime))
    Layers.background.ctx.stroke()
  }
}
