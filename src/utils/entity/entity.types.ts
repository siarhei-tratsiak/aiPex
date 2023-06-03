import IComponent from '@/utils/component.types'

export default interface IEntity {
  components: IComponent[]
  awake(): void
  update(deltaTime: number): void
}
