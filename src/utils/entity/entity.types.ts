import IComponent from '@/utils/component.types'

export default abstract class Entity {
  protected components: IComponent[] = []
}
