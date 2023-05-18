import '@/style.css'
import Canvas from '@/entities/canvas'
import Creature from '@/entities/creature'
import Field from '@/entities/field'
import CanvasService from '@/services/canvas-service'
import CreatureService from '@/services/creature-service'
import FieldService from '@/services/field-service'

const canvas = new Canvas('main-canvas')
const canvasService = new CanvasService(canvas)

canvasService.unwrapCanvas()

const field = new Field(10, 20)
const fieldService = new FieldService(canvas, field)

fieldService.draw()

const creature = new Creature()
const creatureService = new CreatureService()

creatureService.place(creature, { x: 2, y: 4 })
creatureService.draw(canvas, creature, field)
