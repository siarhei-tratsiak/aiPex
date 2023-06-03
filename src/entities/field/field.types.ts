import ICell from '@/entities/cell/cell.types'

export default interface IField {
  cells: ICell[][]

  readonly height: number
  readonly width: number
}
