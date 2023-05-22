import Creature from '@/entities/creature'
import Field from '@/entities/field'

export default class FieldService {
  draw(field: Field) {
    const { ctx } = field.canvas

    if (!ctx) {
      return
    }

    const element = field.canvas.element
    const canvasAspectRatio = element.width / element.height
    const fieldAspectRation = field.width / field.height
    const base = canvasAspectRatio > fieldAspectRation ? 'height' : 'width'
    const cellSize = element[base] / field[base]
    const fieldHeight = field.height * cellSize
    const topStart = (element.height - fieldHeight) / 2
    const fieldWidth = field.width * cellSize
    const leftStart = (element.width - fieldWidth) / 2

    field.cellSize = cellSize
    field.left = leftStart
    field.top = topStart
    ctx.lineWidth = cellSize / 100

    for (let i = 0; i <= field.width; i++) {
      const left = i * cellSize
      ctx.moveTo(left + leftStart, topStart)
      ctx.lineTo(left + leftStart, topStart + fieldHeight)
    }

    for (let i = 0; i <= field.height; i++) {
      const top = i * cellSize

      ctx.moveTo(leftStart, top + topStart)
      ctx.lineTo(leftStart + fieldWidth, top + topStart)
    }

    ctx.stroke()
  }

  drawCreature(creature: Creature, field: Field) {
    if (creature.posX === null || creature.posY === null || !field.canvas.ctx) {
      return
    }

    const img = new Image()
    img.src = creature.img
    img.onload = () => this.onImageLoad(creature, field, img)
  }

  private onImageLoad(creature: Creature, field: Field, img: HTMLImageElement) {
    const { ctx } = field.canvas
    const { cellSize } = field

    if (creature.posX === null || creature.posY === null) {
      return
    }

    ctx?.drawImage(
      img,
      creature.posX * cellSize + field.left,
      creature.posY * cellSize + field.top,
      cellSize,
      cellSize
    )
  }
}
