import Cell from '@/entities/cell/cell'
import Creature from '@/entities/creature/creature'
import IField from '@/entities/field/field.types'
import settings from '@/settings'
import ICoords from '@/utils/coords/coords.types'
import Entity from '@/utils/entity/entity'

export default class Field extends Entity implements IField {
  cells: Cell[][] = []
  creatures: Creature[] = []

  constructor(readonly height: number, readonly width: number) {
    super()
  }

  awake() {
    super.awake()

    this.initCells()
    this.cells.forEach((row) => row.forEach((cell) => cell.awake()))

    this.initCreatures()
    this.creatures.forEach((creature) => creature.awake())
  }

  update(deltaTime: number) {
    super.update(deltaTime)

    this.cells.forEach((row) => row.forEach((cell) => cell.update(deltaTime)))

    this.creatures.forEach((creature) => creature.update(deltaTime))
  }

  private cellIsTaken(coords: ICoords) {
    return this.creatures.some(
      (creature) =>
        creature.cell.coords.x === coords.x &&
        creature.cell.coords.y === coords.y
    )
  }

  private initCells() {
    for (let i = 0; i < this.height; i++) {
      this.cells.push([])
      for (let j = 0; j < this.width; j++) {
        const coords = { x: j, y: i }
        this.cells[i].push(new Cell(coords))
      }
    }
  }

  private initCreatures() {
    for (let i = 0; i < settings.population.count; i++) {
      do {
        // eslint-disable-next-line no-var
        var coords = {
          x: Math.floor(Math.random() * this.width),
          y: Math.floor(Math.random() * this.height)
        }
      } while (this.cellIsTaken(coords))

      this.creatures.push(
        new Creature(this.cells[coords.y][coords.x], Math.random() + 0.5)
      )
    }
  }
}
