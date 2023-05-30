import ICell from '@/entities/cell/cell.types'
import settings from '@/settings'
import IView from '@/view/view.types'

export default class Canvas implements IView {
  readonly ctx: CanvasRenderingContext2D
  readonly element: HTMLCanvasElement

  constructor(id: string) {
    this.element = <HTMLCanvasElement>document.getElementById(id)
    this.element.width = document.body.clientWidth
    this.element.height = document.body.clientHeight - 5

    const ctx = this.element.getContext('2d')

    if (ctx) {
      this.ctx = ctx
    } else {
      throw new Error('context is not available')
    }
  }

  drawCell(cell: ICell) {
    const cellSize = this.getCellSize()
    const { x: fieldX, y: fieldY } = this.getFieldPosition()
    const topLeft = {
      x: fieldX + cell.x * cellSize,
      y: fieldY + cell.y * cellSize
    }
    const bottomRight = { x: topLeft.x + cellSize, y: topLeft.y + cellSize }

    this.ctx.moveTo(topLeft.x, topLeft.y)
    this.ctx.lineTo(bottomRight.x, topLeft.y)
    this.ctx.lineTo(bottomRight.x, bottomRight.y)
    this.ctx.lineTo(topLeft.x, bottomRight.y)
    this.ctx.lineTo(topLeft.x, topLeft.y)
    this.ctx.stroke()
  }

  getCellSize() {
    const canvasAspectRatio = this.element.width / this.element.height
    const fieldAspectRatio = settings.field.width / settings.field.height
    const base = canvasAspectRatio > fieldAspectRatio ? 'height' : 'width'
    return this.element[base] / settings.field[base]
  }

  getFieldPosition() {
    const cellSize = this.getCellSize()

    const fieldWidth = settings.field.width * cellSize
    const fieldHeight = settings.field.height * cellSize

    const x = (this.element.width - fieldWidth) / 2
    const y = (this.element.height - fieldHeight) / 2

    return { x, y }
  }

  runBeforeRepaint(callback: FrameRequestCallback) {
    window.requestAnimationFrame(callback)
  }
}
