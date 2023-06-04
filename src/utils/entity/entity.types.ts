import IComponent from '@/utils/components/component.types'

export default interface IEntity {
  components: IComponent[]
  awake(): void
  update(deltaTime: number): void
}
