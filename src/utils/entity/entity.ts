import settings from '@/settings'
import IComponent from '@/utils/components/component.types'
import IEntity from '@/utils/entity/entity.types'
import { IAwake, IUpdate } from '@/utils/lifecycle.types'

export default abstract class Entity implements IAwake, IEntity, IUpdate {
  components: IComponent[] = []

  awake() {
    this.components.forEach((component) => component.awake())
  }

  getComponent<C extends IComponent>(constr: constr<C>): C {
    for (const component of this.components) {
      if (component instanceof constr) {
        return component as C
      }
    }

    throw new Error(
      `Component ${constr.name} not found on Entity ${this.constructor.name}`
    )
  }

  hasComponent<C extends IComponent>(constr: constr<C>) {
    return this.components.some((component) => component instanceof constr)
  }

  removeComponent<C extends IComponent>(constr: constr<C>) {
    const index = this.components.findIndex(
      (component) => component instanceof constr
    )

    if (index > -1) {
      this.components.splice(index, 1)
    }
  }

  update(isTimeToStartNewCycle: boolean) {
    this.components.forEach((component) =>
      component.update(isTimeToStartNewCycle)
    )
  }

  protected addComponents(componentNames: anyObject, entityName: string) {
    if (!isInEntityNames(entityName)) return

    const entitySettings = settings[entityName]

    if (!('components' in entitySettings)) return

    Object.entries(entitySettings.components).forEach(
      ([componentName, options]) =>
        this.addToEntity(componentName, componentNames, options)
    )
  }

  private addComponent(component: IComponent) {
    this.components.push(component)
  }

  private addToEntity(
    componentName: string,
    componentNames: anyObject,
    options: unknownObject | null
  ) {
    if (!Object.keys(componentNames).includes(componentName)) return

    const componentConstructor = componentNames[componentName]
    const componentOptions = options ? options : undefined

    this.addComponent(new componentConstructor(this, componentOptions))
  }
}

type anyObject = { [key: string]: any }
// constructor with any amount of arguments of any type
// which produces an object of type C
// eslint-disable-next-line prettier/prettier
type constr<T> = { new(...args: unknown[]): T }
type unknownObject = { [key: string]: unknown }

function isInEntityNames(name: string): name is keyof typeof settings {
  return Object.keys(settings).includes(name)
}
