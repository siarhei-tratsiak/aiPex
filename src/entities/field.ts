import Canvas from '@/entities/canvas'
import Population from '@/entities/population'

export default class Field {
  canvas: Canvas
  cellSize = 0
  readonly height: number
  left = 0
  population: Population
  top = 0
  readonly width: number

  constructor(canvas: Canvas, height: number, width: number) {
    this.canvas = canvas
    this.height = height
    this.width = width
  }
}
