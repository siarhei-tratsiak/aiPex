import IComponent from '@/utils/component/component.types'

export default abstract class Entity {
  protected components: IComponent[] = []
}
