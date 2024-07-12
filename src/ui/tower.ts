import { Container, Graphics } from 'pixi.js'
import { Disc } from './disc'

export class Tower extends Container {

  private readonly _base: Graphics
  private _disc: Disc


  constructor () {
    super()

    this._base = new Graphics()

    this._disc = new Disc()

    this.addChild(this._base)
    this.addChild(this._disc)
  }

}
