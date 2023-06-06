import ICell from '@/entities/cell/cell.types'
import ICoords from '@/utils/coords/coords.types'

export default interface IField {
  cells: ICell[][]

  readonly height: number
  readonly width: number

  addCreature(coords: ICoords, weight: number): void
}
