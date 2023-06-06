import ICell from '@/entities/cell/cell.types'
import IField from '@/entities/field/field.types'
import IEntity from '@/utils/entity/entity.types'

export default interface ICreature extends IEntity {
  cell: ICell
  field: IField
  weight: number

  grow(value: number): void
}
