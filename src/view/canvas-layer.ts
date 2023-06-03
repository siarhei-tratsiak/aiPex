import Canvas from '@/view/canvas'

export default class CanvasLayers {
  private static _background: Canvas
  private static _foreground: Canvas

  private constructor() {
    /* make it unaccessible */
  }

  public static get background(): Canvas {
    if (!this._background) {
      this._background = new Canvas(0)
    }

    return this._background
  }

  public static get foreground(): Canvas {
    if (!this._foreground) {
      this._foreground = new Canvas(1)
    }

    return this._foreground
  }
}
