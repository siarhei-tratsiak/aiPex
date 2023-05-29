import ICreature from '@/entities/creature/creature.types'
import IField from '@/entities/field/field.types'
import IPopulation from '@/entities/population/population.types'

export default class FieldService {
  field: IField

  constructor(field: IField) {
    this.field = field
  }

  drawField() {
    const { ctx } = this.field.canvas

    if (!ctx) {
      return
    }

    const element = this.field.canvas.element
    const canvasAspectRatio = element.width / element.height
    const fieldAspectRatio = this.field.width / this.field.height
    const base = canvasAspectRatio > fieldAspectRatio ? 'height' : 'width'
    const cellSize = element[base] / this.field[base]
    const fieldHeight = this.field.height * cellSize
    const topStart = (element.height - fieldHeight) / 2
    const fieldWidth = this.field.width * cellSize
    const leftStart = (element.width - fieldWidth) / 2

    this.field.cellSize = cellSize
    this.field.left = leftStart
    this.field.top = topStart
    ctx.lineWidth = cellSize / 100

    const randomColor = Math.random() > 0.5 ? '#ff8080' : '#0099b0'
    ctx.strokeStyle = randomColor

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

  drawPopulation() {
    const image = new Image()
    image.src = 'creature.png'
    image.onload = () => this.onImageLoad(image)
  }

  place(population: IPopulation) {
    population.creatures.forEach((creature) => {
      let x
      let y

      do {
        x = Math.floor(Math.random() * this.field.height)
        y = Math.floor(Math.random() * this.field.width)
      } while (this.field.cells[x][y] !== null)

      this.field.cells[x][y] = creature
    })
  }

  private onImageLoad(image: HTMLImageElement) {
    const { ctx } = this.field.canvas
    const { cellSize } = this.field

    this.field.cells.forEach((row, x) => {
      row.forEach((cell, y) =>
        this.drawImage({
          cell,
          cellSize,
          ctx,
          image,
          x,
          y
        })
      )
    })
  }

  private drawImage({
    cell,
    cellSize,
    ctx,
    image,
    x,
    y
  }: {
    cell: ICreature | null
    cellSize: number
    ctx: CanvasRenderingContext2D | null
    image: HTMLImageElement
    x: number
    y: number
  }) {
    if (cell === null) {
      return
    }

    const imageSize = (-1 / (1 + cell.weight) + 1) * cellSize
    const transition = (cellSize - imageSize) / 2

    ctx?.drawImage(
      image,
      y * cellSize + this.field.left + transition,
      x * cellSize + this.field.top + transition,
      imageSize,
      imageSize
    )
  }
}
