import Canvas from '@/view/canvas/canvas'

export default class Layers {
  private static _background: Canvas
  private static _foreground: Canvas

  private constructor() {
    /* make it unaccessible */
  }

  public static get background() {
    if (!this._background) {
      this._background = new Canvas(0)
    }

    return this._background
  }

  public static get foreground() {
    if (!this._foreground) {
      this._foreground = new Canvas(1)
    }

    return this._foreground
  }
}
