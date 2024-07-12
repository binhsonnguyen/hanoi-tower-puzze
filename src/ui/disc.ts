import { Container, Graphics } from 'pixi.js'

const defaultDiscOptions = {
  width: 100, height: 10, color: 0xffaa00
}

export type DiscOptions = typeof defaultDiscOptions;

export class Disc extends Container {
  private _options: DiscOptions

  private readonly _base: Graphics

  constructor (options: Partial<DiscOptions> = {}) {
    super(options)

    this._options = { ...defaultDiscOptions, ...options }

    this._base = new Graphics()
    this._base.eventMode = 'static'
    this._base.cursor = 'pointer'
    this._base.rect(0, 0, this._options.width, this._options.height)
    this._base.fill(this._options.color)

    this.addChild(this._base)
  }

  get width (): number {
    return this._base.width
  }

  set width (value: number) {
    this._base.width = value
  }

  get height (): number {
    return this._base.height
  }

  set height (value: number) {
    this._base.height = value
  }
}
