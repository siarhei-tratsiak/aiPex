import Creature from '@/entities/creature'
import IPopulation from '@/entities/population/population.types'

export default class Population implements IPopulation {
  readonly creatures: Creature[] = []

  constructor(count: number) {
    for (let i = 0; i < count; i++) {
      const weight = Math.random() * 2 + 0.5 // between 0.5 and 2
      const creature = new Creature(weight)
      this.creatures.push(creature)
    }
  }
}
