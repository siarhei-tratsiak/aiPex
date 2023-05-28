import Entity from '@/utils/entity/entity'
import { IAwake, IUpdate } from '@/utils/lifecycle.types'

export default interface IComponent extends IAwake, IUpdate {
  entity: Entity | null
}
