import IComponent from '@/utils/component.types'
import { IAwake, IUpdate } from '@/utils/lifecycle.types'

export default abstract class Entity implements IAwake, IUpdate {
  protected components: IComponent[] = []

  get Components(): IComponent[] {
    return this.components
  }

  addComponent(component: IComponent) {
    this.components.push(component)
    component.entity = this
  }

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

  update(deltaTime: number) {
    this.components.forEach((component) => component.update(deltaTime))
  }
}

// constructor with any amount of arguments of any type
// which produces an object of type C
// eslint-disable-next-line prettier/prettier
type constr<T> = { new(...args: unknown[]): T }
