import '@/style.css'
import Canvas from '@/entities/canvas'
import Creature from '@/entities/creature'
import Field from '@/entities/field'
import CanvasService from '@/services/canvas-service'
import CreatureService from '@/services/creature-service'
import FieldService from '@/services/field-service'

const canvas = new Canvas('main-canvas')
const canvasService = new CanvasService()

canvasService.unwrap(canvas)

const field = new Field(canvas, 10, 20)
const fieldService = new FieldService(field)

fieldService.drawField()

const creature = new Creature('creature.png')
const creatureService = new CreatureService()

creatureService.place(creature, { x: 2, y: 4 })
fieldService.drawCreature(creature)
