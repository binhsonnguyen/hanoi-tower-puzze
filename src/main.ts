import { Application, Graphics } from 'pixi.js'

import './style.css'
const app = new Application();
const graphics = new Graphics();

await app.init({ background: '#1099bb', resizeTo: window });
document.body.appendChild(app.canvas);

// Rectangle
graphics.rect(50, 50, 100, 100);
graphics.fill(0xde3249);

app.stage.addChild(graphics);
