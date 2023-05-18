import '@/style.css'
import Canvas from '@/entities/canvas/canvas'
import Field from '@/entities/field/field'
import CanvasService from '@/services/canvas/canvas-service.ts'
import FieldService from '@/services/field/field-service'

const canvas = new Canvas('main-canvas')
const canvasService = new CanvasService(canvas)

canvasService.unwrapCanvas()

const field = new Field(10, 20)
const fieldService = new FieldService(canvas, field)

fieldService.draw()
