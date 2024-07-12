import { Application, Graphics } from 'pixi.js'

import './style.css'

(async () => {
  const app = new Application()

  await app.init({ background: '#1099bb', resizeTo: window })
  document.body.appendChild(app.canvas)

// https://pixijs.com/8.x/examples/graphics/simple
  const graphicBlock = new Graphics()
// Enable the bunny to be interactive... this will allow it to respond to mouse and touch events
  graphicBlock.eventMode = 'static'
// This button mode will mean the hand cursor appears when you roll over the bunny with your mouse
  graphicBlock.cursor = 'pointer'
  graphicBlock.rect(-50, -50, 100, 100)
  graphicBlock.fill(0xde3249)
  graphicBlock.position.x = 200
  graphicBlock.position.y = 200
  graphicBlock.on('pointerdown', onDragStart)

  app.stage.addChild(graphicBlock)

  app.stage.eventMode = 'static'
  app.stage.hitArea = app.screen
  app.stage.on('pointerup', onDragEnd)
  app.stage.on('pointerupoutside', onDragEnd)

  function onDragMove (event: any) {
    graphicBlock.parent.toLocal(event.global, undefined, graphicBlock.position)
  }

  function onDragStart () {
    // Store a reference to the data
    // * The reason for this is because of multitouch *
    // * We want to track the movement of this particular touch *
    graphicBlock.alpha = 0.5
    app.stage.on('pointermove', onDragMove)
  }

  function onDragEnd () {
    app.stage.off('pointermove', onDragMove)
    graphicBlock.alpha = 1
  }
})()