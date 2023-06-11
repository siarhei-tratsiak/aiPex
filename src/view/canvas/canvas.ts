import ICell from '@/entities/cell/cell.types'
import ICreature from '@/entities/creature/creature.types'
import settings from '@/settings'
import Assets from '@/utils/assets/assets'
import ICoords from '@/utils/coords/coords.types'
import ICanvas from '@/view/canvas/canvas.types'
import IView from '@/view/view.types'

export default class Canvas implements ICanvas, IView {
  readonly ctx: CanvasRenderingContext2D
  readonly element: HTMLCanvasElement

  private readonly cellSize: number
  private readonly fieldPosition: ICoords

  constructor(zIndex: number) {
    const canvas = document.createElement('canvas')

    canvas.style.position = 'absolute'
    canvas.style.zIndex = zIndex.toString()
    canvas.height = document.body.clientHeight - 5
    canvas.width = document.body.clientWidth
    document.body.appendChild(canvas)

    this.element = canvas

    const ctx = this.element.getContext('2d')

    if (ctx) {
      this.ctx = ctx
    } else {
      throw new Error('context is not available')
    }

    this.cellSize = this.getCellSize()
    this.fieldPosition = this.getFieldPosition()
  }

  clear() {
    this.ctx.clearRect(0, 0, this.element.width, this.element.height)
  }

  draw() {
    this.ctx.stroke()
  }

  drawCell(cell: ICell) {
    const cellSize = Math.floor(this.cellSize)
    const { x: fieldX, y: fieldY } = this.fieldPosition
    const topLeft = {
      x: Math.floor(fieldX + cell.coords.x * cellSize),
      y: Math.floor(fieldY + cell.coords.y * cellSize)
    }

    this.ctx.rect(topLeft.x, topLeft.y, cellSize, cellSize)
  }

  drawCreature(creature: ICreature) {
    const cellSize = Math.floor(this.cellSize)
    const imageSize = (-1 / (1 + creature.weight) + 1) * cellSize
    const transition = (cellSize - imageSize) / 2

    this.ctx?.drawImage(
      Assets.images.creature,
      creature.cell.coords.x * cellSize + this.fieldPosition.x + transition,
      creature.cell.coords.y * cellSize + this.fieldPosition.y + transition,
      imageSize,
      imageSize
    )
  }

  private getCellSize() {
    const canvasAspectRatio = this.element.width / this.element.height
    const fieldAspectRatio = settings.field.width / settings.field.height
    const base = canvasAspectRatio > fieldAspectRatio ? 'height' : 'width'
    return this.element[base] / settings.field[base]
  }

  private getFieldPosition() {
    const cellSize = this.cellSize
    const fieldWidth = settings.field.width * cellSize
    const fieldHeight = settings.field.height * cellSize

    const x = (this.element.width - fieldWidth) / 2
    const y = (this.element.height - fieldHeight) / 2

    return { x, y }
  }
}
