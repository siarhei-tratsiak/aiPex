import Creature from '@/entities/creature'

export default class CreatureService {
  place(creature: Creature, position: { x: number; y: number }) {
    creature.posX = position.x
    creature.posY = position.y
  }
}
