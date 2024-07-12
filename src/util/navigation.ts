import { Container, Ticker } from 'pixi.js'

interface AppScreen extends Container {
  /** Show the screen */
  show?(): Promise<void>;
  /** Hide the screen */
  hide?(): Promise<void>;
  /** Pause the screen */
  pause?(): Promise<void>;
  /** Resume the screen */
  resume?(): Promise<void>;
  /** Prepare screen, before showing */
  prepare?(): void;
  /** Reset screen, after hidden */
  reset?(): void;
  /** Update the screen, passing delta time/step */
  update?(time: Ticker): void;
  /** Resize the screen */
  resize?(width: number, height: number): void;
  /** Blur the screen */
  blur?(): void;
  /** Focus the screen */
  focus?(): void;
}

/** Interface for app screens constructors */
interface AppScreenConstructor {
  new (): AppScreen;
  /** List of assets bundles required by the screen */
  assetBundles?: string[];
}
class Navigation {
  async showScreen (screenCtor: AppScreenConstructor) {
    new screenCtor()
  }
}

/** Shared navigation instance */
export const navigation = new Navigation();