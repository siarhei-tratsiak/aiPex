import Canvas from '@/entities/canvas'
import ICreature from '@/entities/creature/creature.types'

export default interface IField {
  canvas: Canvas
  cells: (null | ICreature)[][]
  cellSize: number
  readonly height: number
  left: number
  top: number
  readonly width: number
}
