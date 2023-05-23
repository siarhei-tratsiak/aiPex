import '@/style.css'
import Canvas from '@/entities/canvas'
import Field from '@/entities/field'
import CanvasService from '@/services/canvas-service'
import FieldService from '@/services/field-service'

const canvas = new Canvas('main-canvas')
const canvasService = new CanvasService()

canvasService.unwrap(canvas)

const field = new Field(canvas, 10, 20)
const fieldService = new FieldService(field)

fieldService.drawField()
fieldService.sow(10)
