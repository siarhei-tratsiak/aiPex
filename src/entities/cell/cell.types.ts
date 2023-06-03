import ICoords from '@/utils/coords/coords.types'
import IEntity from '@/utils/entity/entity.types'

export default interface ICell extends IEntity {
  readonly coords: ICoords
}
