import IEntity from '@/utils/entity/entity.types'

export default interface ICell extends IEntity {
  readonly x: number
  readonly y: number
}
