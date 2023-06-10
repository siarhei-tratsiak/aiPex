import Field from '@/entities/field/field'
import settings from '@/settings'
import Assets from '@/utils/assets/assets'
import Entity from '@/utils/entity/entity'
import Layers from '@/view/layers/layers'

export default class Game extends Entity {
  assets: Assets | null = null
  entities: Entity[] = []

  private cycleStart = 0

  awake() {
    super.awake()

    this.entities.push(new Field(settings.field.height, settings.field.width))
    this.entities.forEach((entity) => entity.awake())

    this.assets = new Assets()
    this.assets.onload(() => this.onAssetsLoad())
  }

  update() {
    this.runBeforeRepaint()

    Layers.background.clearRect()
    Layers.foreground.clearRect()

    const isTimeToStartNewCycle =
      Date.now() - this.cycleStart >= settings.cycle.length

    if (isTimeToStartNewCycle) {
      this.cycleStart = Date.now()
    }

    super.update(isTimeToStartNewCycle)
    this.entities.forEach((entity) => entity.update(isTimeToStartNewCycle))

    Layers.background.ctx.stroke()
  }

  private onAssetsLoad() {
    this.cycleStart = Date.now()
    this.runBeforeRepaint()
  }

  private runBeforeRepaint() {
    window.requestAnimationFrame(() => this.update())
  }
}
