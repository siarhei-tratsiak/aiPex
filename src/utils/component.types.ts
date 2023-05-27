import IAwake from '@/utils/awake.types'
import Entity from '@/utils/entity/entity'
import IUpdate from '@/utils/update.types'

export default interface IComponent extends IAwake, IUpdate {
  entity: Entity | null
}
