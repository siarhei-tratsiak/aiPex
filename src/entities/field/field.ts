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

  addCreature(coords: ICoords, weight: number) {
    // if outside the field, then appear from the opposite side of the field
    coords.x = (coords.x + settings.field.width) % settings.field.width
    coords.y = (coords.y + settings.field.height) % settings.field.height

    const creatureIndex = this.creatures.findIndex(
      (creature) =>
        creature.cell.coords.x === coords.x &&
        creature.cell.coords.y === coords.y
    )
    const cellIsTaken = creatureIndex !== -1

    if (cellIsTaken) {
      const oldCreatureIsWeaker = this.creatures[creatureIndex].weight < weight

      if (oldCreatureIsWeaker) {
        this.creatures.splice(creatureIndex, 1)
        this.addNewCreature(coords, weight)
      }
    } else {
      this.addNewCreature(coords, weight)
    }
  }

  awake() {
    super.awake()

    this.initCells()
    this.cells.forEach((row) => row.forEach((cell) => cell.awake()))

    this.initCreatures()
  }

  update(isTimeToStartNewCycle: boolean) {
    super.update(isTimeToStartNewCycle)

    this.cells.forEach((row) =>
      row.forEach((cell) => cell.update(isTimeToStartNewCycle))
    )

    this.creatures.forEach((creature) => creature.update(isTimeToStartNewCycle))
  }

  private addNewCreature(coords: ICoords, weight: number) {
    const creature = new Creature(this.cells[coords.y][coords.x], this, weight)

    this.creatures.push(creature)
    creature.awake()
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

      this.addCreature(coords, Math.random() + 0.5)
    }
  }
}
