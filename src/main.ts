import { Application } from 'pixi.js'

import './main.css'
import { getUrlParam } from './util/urlParams'
import { navigation } from './util/navigation'
import { PuzzleScreen } from './screens/puzzleScreen'

export const app = new Application()

// Init everything
init().then(() => {
  console.log('initialized')
})

// End of execution

/** Setup app and initialise assets */
async function init () {
  // Initialize app
  await app.init({
    resolution: Math.max(window.devicePixelRatio, 2),
    backgroundColor: 0xffffff,
  })

  // Add pixi canvas element (app.canvas) to the document's body
  document.body.appendChild(app.canvas)

  // Whenever the window resizes, call the 'resize' function
  window.addEventListener('resize', resize)

  // Trigger the first resize
  resize()

  // Add a visibility listener, so the app can pause sounds and screens
  document.addEventListener('visibilitychange', visibilityChange)

  // Go to one of the screens if a shortcut is present in url params, otherwise go to home-screen
  if (!!getUrlParam('puzzle')) {
    await navigation.showScreen(PuzzleScreen)
  } else if (!!getUrlParam('result')) {
    await navigation.showScreen(PuzzleScreen)
  } else {
    await navigation.showScreen(PuzzleScreen)
  }
}

function resize () {
  console.log('resize not implemented')
}

function visibilityChange () {
  console.log('visibility change not implemented')
}
