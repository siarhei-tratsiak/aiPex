export default class Canvas {
  readonly ctx: CanvasRenderingContext2D | null
  readonly element: HTMLCanvasElement

  constructor(id: string) {
    this.element = <HTMLCanvasElement>document.getElementById(id)
    this.ctx = this.element.getContext('2d')
  }
}
