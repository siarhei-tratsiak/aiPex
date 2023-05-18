import Canvas from '@/entities/canvas/canvas'
import Field from '@/entities/field/field'

export default class FieldService {
  readonly canvas: Canvas
  readonly field: Field

  constructor(canvas: Canvas, field: Field) {
    this.canvas = canvas
    this.field = field
  }

  draw() {
    const { ctx } = this.canvas

    if (!ctx) {
      return
    }

    const element = this.canvas.element
    const canvasAspectRatio = element.width / element.height
    const fieldAspectRation = this.field.width / this.field.height
    const base = canvasAspectRatio > fieldAspectRation ? 'height' : 'width'
    const cellSize = element[base] / this.field[base]
    const fieldHeight = this.field.height * cellSize
    const topStart = (element.height - fieldHeight) / 2
    const fieldWidth = this.field.width * cellSize
    const leftStart = (element.width - fieldWidth) / 2

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
}
