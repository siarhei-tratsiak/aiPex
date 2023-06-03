import ICell from '@/entities/cell/cell.types'
import settings from '@/settings'
import IView from '@/view/view.types'

export default class Canvas implements IView {
  readonly ctx: CanvasRenderingContext2D
  readonly element: HTMLCanvasElement

  private readonly cellSize: number
  private readonly fieldPosition: { x: number; y: number }

  constructor() {
    const canvas = document.createElement('canvas')
    canvas.height = document.body.clientHeight - 5
    canvas.width = document.body.clientWidth
    document.body.appendChild(canvas)

    this.element = canvas

    const ctx = this.element.getContext('2d')

    if (ctx) {
      this.ctx = ctx
    } else {
      throw new Error('context is not available')
    }

    this.cellSize = this.getCellSize()
    this.fieldPosition = this.getFieldPosition()
  }

  clearRect() {
    this.ctx.clearRect(0, 0, this.element.width, this.element.height)
  }

  drawCell(cell: ICell) {
    const cellSize = Math.floor(this.cellSize)
    const { x: fieldX, y: fieldY } = this.fieldPosition
    const topLeft = {
      x: Math.floor(fieldX + cell.x * cellSize),
      y: Math.floor(fieldY + cell.y * cellSize)
    }

    this.ctx.rect(topLeft.x, topLeft.y, cellSize, cellSize)
  }

  getCellSize() {
    const canvasAspectRatio = this.element.width / this.element.height
    const fieldAspectRatio = settings.field.width / settings.field.height
    const base = canvasAspectRatio > fieldAspectRatio ? 'height' : 'width'
    return this.element[base] / settings.field[base]
  }

  getFieldPosition() {
    const cellSize = this.cellSize
    const fieldWidth = settings.field.width * cellSize
    const fieldHeight = settings.field.height * cellSize

    const x = (this.element.width - fieldWidth) / 2
    const y = (this.element.height - fieldHeight) / 2

    return { x, y }
  }
}
