import Creature from '@/entities/creature'
import Field from '@/entities/field'
import CreatureService from '@/services/creature-service'

export default class FieldService {
  private field: Field

  constructor(field: Field) {
    this.field = field
  }

  drawField() {
    const { ctx } = this.field.canvas

    if (!ctx) {
      return
    }

    const element = this.field.canvas.element
    const canvasAspectRatio = element.width / element.height
    const fieldAspectRation = this.field.width / this.field.height
    const base = canvasAspectRatio > fieldAspectRation ? 'height' : 'width'
    const cellSize = element[base] / this.field[base]
    const fieldHeight = this.field.height * cellSize
    const topStart = (element.height - fieldHeight) / 2
    const fieldWidth = this.field.width * cellSize
    const leftStart = (element.width - fieldWidth) / 2

    this.field.cellSize = cellSize
    this.field.left = leftStart
    this.field.top = topStart
    ctx.lineWidth = cellSize / 100

    for (let i = 0; i <= this.field.width; i++) {
      const left = i * cellSize
      ctx.moveTo(left + leftStart, topStart)
      ctx.lineTo(left + leftStart, topStart + fieldHeight)
    }

    for (let i = 0; i <= this.field.height; i++) {
      const top = i * cellSize

      ctx.moveTo(leftStart, top + topStart)
      ctx.lineTo(leftStart + fieldWidth, top + topStart)
    }

    ctx.stroke()
  }

  drawCreature(creature: Creature) {
    if (
      creature.posX === null ||
      creature.posY === null ||
      !this.field.canvas.ctx
    ) {
      return
    }

    const img = new Image()
    img.src = creature.img
    img.onload = () => this.onImageLoad(creature, img)
  }

  sow(count: number) {
    const creatureService = new CreatureService()
    const cellsCount = this.field.height * this.field.width
    const sowingCells: number[] = []

    while (count > 0) {
      const sowingCell = Math.floor(Math.random() * cellsCount)

      if (!sowingCells.includes(sowingCell)) {
        const weight = Math.random() * 2 + 0.5 // between 0.5 and 2
        const creature = new Creature('creature.png', weight)
        const y = Math.floor(sowingCell / this.field.width)
        const x = sowingCell % this.field.width

        sowingCells.push(sowingCell)
        creatureService.place(creature, { x, y })
        this.drawCreature(creature)
        count--
      }
    }
  }

  private onImageLoad(creature: Creature, img: HTMLImageElement) {
    const { ctx } = this.field.canvas
    const { cellSize } = this.field
    const imageSize = (-1 / (1 + creature.weight) + 1) * cellSize
    const transition = (cellSize - imageSize) / 2

    if (creature.posX === null || creature.posY === null) {
      return
    }

    ctx?.drawImage(
      img,
      creature.posX * cellSize + this.field.left + transition,
      creature.posY * cellSize + this.field.top + transition,
      imageSize,
      imageSize
    )
  }
}
