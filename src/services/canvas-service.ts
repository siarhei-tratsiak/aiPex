import Canvas from '@/entities/canvas'

export default class CanvasService {
  readonly canvas: Canvas

  constructor(canvas: Canvas) {
    this.canvas = canvas
  }

  unwrapCanvas() {
    const element = this.canvas.element

    element.width = document.body.clientWidth
    element.height = document.body.clientHeight
  }
}
