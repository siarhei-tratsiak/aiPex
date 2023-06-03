import IAssets from '@/utils/assets/assets.types'

export default class Assets implements IAssets {
  static images: { creature: HTMLImageElement }

  constructor() {
    if (!Assets.images) {
      const image = new Image()
      image.src = 'creature.png'
      Assets.images = { creature: image }
    }
  }

  onload(callback: () => void) {
    return new Promise(
      (resolve) => (Assets.images.creature.onload = () => resolve(callback()))
    )
  }
}
