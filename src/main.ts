import '@/style.css'

import Canvas from '@/view/canvas'
import Game from '@/entities/game/game'

const view = new Canvas('main-canvas')

new Game(view).awake()
