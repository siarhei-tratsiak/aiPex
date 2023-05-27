import Creature from '@/entities/creature/creature'

export default interface IPopulation {
  readonly creatures: Creature[]
}
