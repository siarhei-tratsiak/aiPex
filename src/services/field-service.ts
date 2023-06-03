import ICreature from '@/entities/creature/creature.types'
import IField from '@/entities/field/field.types'

export default class FieldService {
  field: IField

  constructor(field: IField) {
    this.field = field
  }

  drawPopulation() {
    const image = new Image()
    image.src = 'creature.png'
    image.onload = () => this.onImageLoad(image)
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
