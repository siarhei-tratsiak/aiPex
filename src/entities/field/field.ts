import Cell from '@/entities/cell/cell'
import Creature from '@/entities/creature/creature'
import IField from '@/entities/field/field.types'
import settings from '@/settings'
import Entity from '@/utils/entity/entity'

export default class Field extends Entity implements IField {
  cells: Cell[][] = []
  cellSize = 0

  constructor(readonly height: number, readonly width: number) {
    super()
  }

  awake() {
    super.awake()
    this.initCells()
    this.initCreatures()
    this.cells.forEach((row) => row.forEach((cell) => cell.awake()))
  }

  update(deltaTime: number) {
    super.update(deltaTime)
    this.cells.forEach((row) =>
      row.forEach((cell) => {
        cell.update(deltaTime)
        cell.creature?.update(deltaTime)
      })
    )
  }

  private initCells() {
    for (let i = 0; i < this.height; i++) {
      this.cells.push([])
      for (let j = 0; j < this.width; j++) {
        this.cells[i].push(new Cell(j, i))
      }
    }
  }

  private initCreatures() {
    for (let i = 0; i < settings.population.count; i++) {
      do {
        // eslint-disable-next-line no-var
        var x = Math.floor(Math.random() * this.height)
        // eslint-disable-next-line no-var
        var y = Math.floor(Math.random() * this.width)
      } while (this.cells[x][y].creature !== null)

      this.cells[x][y].creature = new Creature()
    }
  }
}
