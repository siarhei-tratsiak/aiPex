import ICell from '@/entities/cell/cell.types'

export default interface IView {
  drawCell(cell: ICell): void
  runBeforeRepaint(callback: FrameRequestCallback): void
}
