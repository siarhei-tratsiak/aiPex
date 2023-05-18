import Canvas from '@/entities/canvas/canvas'

export default class CanvasService {
  readonly canvas: Canvas

  constructor(canvas: Canvas) {
    this.canvas = canvas
  }

  drawLine() {
    const ctx = this.canvas.ctx

    ctx?.moveTo(0, 0)
    ctx?.lineTo(200, 100)
    ctx?.stroke()
  }

  unwrapCanvas() {
    const element = this.canvas.element

    element.width = document.body.clientWidth
    element.height = document.body.clientHeight
  }
}
