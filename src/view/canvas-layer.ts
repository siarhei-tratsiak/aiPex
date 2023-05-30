import Canvas from '@/view/canvas'

export default class CanvasLayer {
  private static _background: Canvas

  private constructor() {
    /* make it unaccessible */
  }

  public static get background(): Canvas {
    if (!this._background) {
      this._background = new Canvas()
    }

    return this._background
  }
}
