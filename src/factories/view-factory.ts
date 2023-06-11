import settings from '@/settings'
import Canvas from '@/view/canvas/canvas'

export default class ViewFactory {
  static createView(zIndex: number) {
    const type = settings.view?.type || 'canvas'

    switch (type) {
      default:
        return new Canvas(zIndex)
    }
  }
}
