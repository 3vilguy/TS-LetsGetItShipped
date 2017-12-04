import * as PIXI from 'pixi.js';

import { WIDTH, HEIGHT, BG_COLOR } from './constants/RendererConstants';

// Init Pixi stuff
const app = new PIXI.Application(WIDTH, HEIGHT, {backgroundColor: BG_COLOR});
app.view.style.display = "block";
app.renderer.autoResize = true;
document.body.appendChild(app.view);
onWindowResize();

// Resizing
if (app.renderer.autoResize) {
    window.onresize = onWindowResize;
}

function onWindowResize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    app.renderer.resize(width, height);
    app.view.style.width = width + "px";
    app.view.style.height = height + "px";

    // Make sure we always fit the screen vertically
    var scale = height/HEIGHT;
    app.stage.scale.set(scale, scale);

    // Center stage horizontally
    app.stage.x = (window.innerWidth - WIDTH * scale) * 0.5;
}

init();

function init() {
    const style = new PIXI.TextStyle({
        fill: "white",
        fontSize: 220,
        fontWeight: "bold",
        strokeThickness: 4
    });
    const text = new PIXI.Text('Let\'s get it\nSHIPPED!', style);
    text.anchor.set(0.5, 0.5);
    text.x = WIDTH * 0.5;
    text.y = HEIGHT * 0.5;

    app.stage.addChild(text);
    
    app.ticker.add(update);
}

function update() {
    app.renderer.render(app.stage);
}
