import IComponent from '@/utils/component/component.types'

export default abstract class Entity {
  protected components: IComponent[] = []

  get Components(): IComponent[] {
    return this.components
  }

  addComponent(component: IComponent): void {
    this.components.push(component)
    component.entity = this
  }

  // constructor with any amount of arguments of any type
  // which produces an object of type C
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

  hasComponent<C extends IComponent>(constr: constr<C>): boolean {
    return this.components.some((component) => component instanceof constr)
  }

  removeComponent<C extends IComponent>(constr: constr<C>): void {
    const index = this.components.findIndex(
      (component) => component instanceof constr
    )

    if (index > -1) {
      this.components.splice(index, 1)
    }
  }
}

// eslint-disable-next-line prettier/prettier
type constr<T> = { new(...args: unknown[]): T }
