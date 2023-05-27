import '@/style.css'
import Canvas from '@/entities/canvas'
import Field from '@/entities/field/field'
import Game from '@/entities/game/game'
import Population from '@/entities/population/population'
import CanvasService from '@/services/canvas-service'
import FieldService from '@/services/field-service'

const canvas = new Canvas('main-canvas')
const canvasService = new CanvasService()

canvasService.unwrap(canvas)

const field = new Field(canvas, 10, 20)
const fieldService = new FieldService(field)
const population = new Population(10)

fieldService.place(population)

new Game().awake()
