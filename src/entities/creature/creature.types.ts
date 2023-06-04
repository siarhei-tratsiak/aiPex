import ICell from '@/entities/cell/cell.types'
import IEntity from '@/utils/entity/entity.types'

export default interface ICreature extends IEntity {
  cell: ICell
  weight: number

  grow(value: number): void
}
