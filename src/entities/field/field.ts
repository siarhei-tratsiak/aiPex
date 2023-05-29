import Cell from '@/entities/cell/cell'
import IField from '@/entities/field/field.types'
import IView from '@/entities/view.types'
import Entity from '@/utils/entity/entity'

export default class Field extends Entity implements IField {
  cells: Cell[][] = []
  cellSize = 0

  constructor(
    readonly height: number,
    private readonly view: IView,
    readonly width: number
  ) {
    super()
  }

  awake() {
    super.awake()
    this.initCells()
    this.cells.forEach((row) => row.forEach((cell) => cell.awake()))
  }

  update(deltaTime: number) {
    super.update(deltaTime)
    this.cells.forEach((row) => row.forEach((cell) => cell.update(deltaTime)))
  }

  private initCells() {
    for (let i = 0; i < this.height; i++) {
      this.cells.push([])
      for (let j = 0; j < this.width; j++) {
        this.cells[i].push(new Cell(this.view, j, i))
      }
    }
  }
}
