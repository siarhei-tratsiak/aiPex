import IEntity from '@/utils/entity/entity.types'

export default interface ICreature extends IEntity {
  weight: number
  grow(): void
}
