import Canvas from '@/entities/canvas'
import ICreature from '@/entities/creature/creature.types'
import IField from '@/entities/field/field.types'

export default class Field implements IField {
  canvas: Canvas
  cells: (null | ICreature)[][] = []
  cellSize = 0
  readonly height: number
  left = 0
  top = 0
  readonly width: number

  constructor(canvas: Canvas, height: number, width: number) {
    this.canvas = canvas
    this.height = height
    this.width = width

    this.initCells()
  }

  private initCells() {
    for (let i = 0; i < this.height; i++) {
      this.cells.push([])
      for (let j = 0; j < this.width; j++) {
        this.cells[i].push(null)
      }
    }
  }
}
