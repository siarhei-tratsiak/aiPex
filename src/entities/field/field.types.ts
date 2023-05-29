import ICell from '@/entities/cell/cell.types'

export default interface IField {
  cells: ICell[][]
  cellSize: number

  readonly height: number
  readonly width: number
}
