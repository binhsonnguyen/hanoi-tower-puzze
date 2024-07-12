import { Container } from 'pixi.js'
import { Disc } from '../ui/disc'

export class PuzzleScreen extends Container {
  private _disc: Disc

  constructor () {
    super()
    this._disc = new Disc()

    this.addChild(this._disc)
  }
}