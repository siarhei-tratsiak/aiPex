import Canvas from '@/entities/canvas'
import Creature from '@/entities/creature'
import Field from '@/entities/field'

export default class CreatureService {
  draw(canvas: Canvas, creature: Creature, field: Field) {
    if (creature.posX === null || creature.posY === null || !canvas.ctx) {
      return
    }

    const { ctx } = canvas
    const { cellSize } = field

    const img = new Image()
    img.src = '/creature.png'
    img.onload = () => {
      if (creature.posX === null || creature.posY === null) {
        return
      }

      ctx.drawImage(
        img,
        creature.posX * cellSize + field.left,
        creature.posY * cellSize + field.top,
        cellSize,
        cellSize
      )
    }
  }

  place(creature: Creature, position: { x: number; y: number }) {
    creature.posX = position.x
    creature.posY = position.y
  }
}
