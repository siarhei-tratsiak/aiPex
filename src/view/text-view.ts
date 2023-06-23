import ICell from '@/entities/cell/cell.types'
import ICreature from '@/entities/creature/creature.types'
import IView from '@/view/view.types'

export default class TextView implements IView {
  constructor() {
    let view = document.getElementById('view')

    if (!view) {
      view = document.createElement('table')
    }
  }
  clear(): void {
    throw new Error('Method not implemented.')
  }
  draw(): void {
    throw new Error('Method not implemented.')
  }
  drawCell(cell: ICell): void {
    throw new Error('Method not implemented.')
  }
  drawCreature(creature: ICreature): void {
    throw new Error('Method not implemented.')
  }
}
