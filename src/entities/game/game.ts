import Field from '@/entities/field/field'
import IGame from '@/entities/game/game.types'
import settings from '@/settings'
import Entity from '@/utils/entity/entity'
import IView from '@/view/view.types'

export default class Game extends Entity implements IGame {
  entities: Entity[] = []

  private readonly awakeCallback = () => {
    this.lastTimestamp = Date.now()
    this.update()
  }
  private lastTimestamp = 0

  constructor(public view: IView) {
    super()
  }

  awake() {
    super.awake()

    this.entities.push(
      new Field(settings.field.height, this.view, settings.field.width)
    )
    this.entities.forEach((entity) => entity.awake())
    // Make sure Update starts after all entities are awaken
    this.view.runBeforeRepaint(this.awakeCallback)
  }

  update() {
    const deltaTime = (Date.now() - this.lastTimestamp) / 1000

    super.update(deltaTime)

    this.entities.forEach((entity) => entity.update(deltaTime))
    this.lastTimestamp = Date.now()
    this.view.runBeforeRepaint(() => this.update())
  }
}
