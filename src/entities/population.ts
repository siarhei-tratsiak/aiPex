import Creature from '@/entities/creature'

export default class Population {
  readonly creatures: Creature[]

  constructor(creatures: Creature[]) {
    this.creatures = creatures
  }
}
