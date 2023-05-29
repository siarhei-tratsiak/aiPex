import IEntity from '@/utils/entity/entity.types'
import { IAwake, IUpdate } from '@/utils/lifecycle.types'

export default interface IComponent extends IAwake, IUpdate {
  entity: IEntity | null
}
