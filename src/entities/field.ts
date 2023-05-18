export default class Field {
  cellSize = 0
  readonly height: number
  left = 0
  top = 0
  readonly width: number

  constructor(height: number, width: number) {
    this.height = height
    this.width = width
  }
}
