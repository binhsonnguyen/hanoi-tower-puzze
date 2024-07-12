import { Container, Ticker } from 'pixi.js'
import { app } from '../main'

interface AppScreen extends Container {
  /** Show the screen */
  show? (): Promise<void>;

  /** Hide the screen */
  hide? (): Promise<void>;

  /** Pause the screen */
  pause? (): Promise<void>;

  /** Resume the screen */
  resume? (): Promise<void>;

  /** Prepare screen, before showing */
  prepare? (): void;

  /** Reset screen, after hidden */
  reset? (): void;

  /** Update the screen, passing delta time/step */
  update? (time: Ticker): void;

  /** Resize the screen */
  resize? (width: number, height: number): void;

  /** Blur the screen */
  blur? (): void;

  /** Focus the screen */
  focus? (): void;
}

/** Interface for app screens constructors */
interface AppScreenConstructor {
  /** List of assets bundles required by the screen */
  assetBundles?: string[];

  new (): AppScreen;
}

class Navigation {
  public _container = new Container()

  async showScreen (screenCtor: AppScreenConstructor) {
    const screen = new screenCtor()

    if (!this._container.parent) {
      app.stage.addChild(this._container)
    }

    this._container.addChild(screen)
  }
}

/** Shared navigation instance */
export const navigation = new Navigation()