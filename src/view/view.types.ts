import ICell from '@/entities/cell/cell.types'
import ICreature from '@/entities/creature/creature.types'

export default interface IView {
  clear(): void
  draw(): void
  drawCell(cell: ICell): void
  drawCreature(creature: ICreature): void
}
