import ICell from '@/entities/cell/cell.types'
import CellDrawer from '@/entities/cell/components/cell-drawer'
import ICoords from '@/utils/coords/coords.types'
import Entity from '@/utils/entity/entity'

export default class Cell extends Entity implements ICell {
  constructor(readonly coords: ICoords) {
    super()
  }

  awake() {
    super.awake()

    super.addComponents({ CellDrawer }, 'Cell')
  }
}
