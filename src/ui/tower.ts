import { Container, Graphics } from 'pixi.js'

const defaultTowerOptions = {
  x: 200,
  y: 200,
  height: 120,
  width: 100,
  color: 0x000000
}

export type TowerOptions = typeof defaultTowerOptions

export class Tower extends Container {
  private _options: TowerOptions

  private readonly _base: Graphics
  private readonly _pillar: Graphics

  constructor (options: Partial<TowerOptions> = {}) {
    super()

    this._options = { ...defaultTowerOptions, ...options }

    this._base = new Graphics()
    this._base.rect(this._options.x - this._options.width / 2, this._options.y, this._options.width, 1)
    this._base.fill(this._options.color)

    this._pillar = new Graphics()
    this._base.rect(this._options.x, this._options.y - this._options.height, 1, this._options.height)
    this._base.fill(this._options.color)

    this.addChild(this._base)
    this.addChild(this._pillar)
  }

}
