import Creature from '@/entities/creature'
import Field from '@/entities/field'
import CreatureService from '@/services/creature-service'

export default class Population {
  readonly creatures: Creature[] = []

  constructor(count: number, field: Field) {
    const creatureService = new CreatureService()
    const cellsCount = field.height * field.width
    const sowingCells: number[] = []

    while (count > 0) {
      const cellIndex = Math.floor(Math.random() * cellsCount)

      if (!sowingCells.includes(cellIndex)) {
        const weight = Math.random() * 2 + 0.5 // between 0.5 and 2
        const creature = new Creature('creature.png', weight)
        const y = Math.floor(cellIndex / field.width)
        const x = cellIndex % field.width

        sowingCells.push(cellIndex)
        creatureService.place(creature, { x, y })
        this.creatures.push(creature)
        count--
      }
    }
  }
}
