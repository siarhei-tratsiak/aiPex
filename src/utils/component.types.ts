import Entity from '@/utils/entity/entity'
import IUpdate from '@/utils/update.types'

export default interface IComponent extends IUpdate {
  entity: Entity | null
}
