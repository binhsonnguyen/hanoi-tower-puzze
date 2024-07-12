import { Container } from 'pixi.js'
import { Tower } from '../ui/tower'

export class PuzzleScreen extends Container {
  private _tower: Tower

  constructor () {
    super()
    this._tower = new Tower()

    this.addChild(this._tower)
  }
}