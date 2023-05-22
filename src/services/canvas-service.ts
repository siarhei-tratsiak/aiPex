import Canvas from '@/entities/canvas'

export default class CanvasService {
  unwrap(canvas: Canvas) {
    const element = canvas.element

    element.width = document.body.clientWidth
    element.height = document.body.clientHeight - 5
  }
}
