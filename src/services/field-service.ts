import Creature from '@/entities/creature'
import Field from '@/entities/field'
import IPopulation from '@/entities/population/population.types'
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

  place(population: IPopulation) {
    const creatureService = new CreatureService()
    const cellsCount = this.field.height * this.field.width
    const sowingCells: number[] = []

    population.creatures.forEach((creature) => {
      let cellIndex

      do {
        cellIndex = Math.floor(Math.random() * cellsCount)
      } while (sowingCells.includes(cellIndex))

      sowingCells.push(cellIndex)

      const y = Math.floor(cellIndex / this.field.width)
      const x = cellIndex % this.field.width
      creatureService.place(creature, { x, y })
    })
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
