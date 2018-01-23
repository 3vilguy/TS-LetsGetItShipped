import * as PIXI from 'pixi.js';

import MainController from './controller/MainController';
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

// Load assets
PIXI.loader
    .add(require('../assets/images/intro/pattern.png'))
    .add([
        require('../assets/images/intro/S.png'),
        require('../assets/images/intro/H.png'),
        require('../assets/images/intro/I.png'),
        require('../assets/images/intro/P.png'),
        require('../assets/images/intro/T.png'),
        require('../assets/images/intro/ship-it-squirrel.png')
    ])
    .add([
        require('../assets/images/desk/desk.png'),
        require('../assets/images/desk/cables.png'),
        require('../assets/images/desk/screen01.png'),
        require('../assets/images/desk/screen02.png'),
        require('../assets/images/desk/glare01.png'),
        require('../assets/images/desk/glare02.png'),
        require('../assets/images/desk/bottle.png')
    ])
    .add([
        require('../assets/images/ui/key.png'),
        require('../assets/images/ui/keyPressed.png')
    ])
    .add([
        require('../assets/images/dave/dave 2_00000.png'),
        require('../assets/images/dave/dave 2_00001.png'),
        require('../assets/images/dave/dave 2_00002.png'),
        require('../assets/images/dave/dave 2_00003.png'),
        require('../assets/images/dave/dave 2_00004.png'),
        require('../assets/images/dave/dave 2_00005.png'),
        require('../assets/images/dave/dave 2_00006.png'),
        require('../assets/images/dave/dave 2_00007.png'),
        require('../assets/images/dave/dave 2_00008.png'),
        require('../assets/images/dave/dave 2_00009.png'),
        require('../assets/images/dave/dave 2_00010.png'),
        require('../assets/images/dave/dave 2_00011.png'),
        require('../assets/images/dave/dave 2_00012.png'),
        require('../assets/images/dave/dave 2_00013.png'),
        require('../assets/images/dave/dave 2_00014.png'),
        require('../assets/images/dave/dave 2_00015.png'),
        require('../assets/images/dave/dave 2_00016.png'),
        require('../assets/images/dave/dave 2_00017.png'),
        require('../assets/images/dave/dave 2_00018.png'),
        require('../assets/images/dave/dave 2_00019.png'),
        require('../assets/images/dave/dave 2_00020.png'),
        require('../assets/images/dave/dave 2_00021.png'),
        require('../assets/images/dave/dave 2_00022.png'),
        require('../assets/images/dave/dave 2_00023.png'),
        require('../assets/images/dave/dave 2_00024.png'),
        require('../assets/images/dave/dave 2_00025.png'),
        require('../assets/images/dave/dave 2_00026.png'),
        require('../assets/images/dave/dave 2_00027.png'),
        require('../assets/images/dave/dave 2_00028.png')
    ])
    .load(onAssetsLoaded);

function onAssetsLoaded() {
    init();
}

function init() {
    var gameController:MainController = new MainController(app.stage);
    app.ticker.add(update);
}

function update() {
    app.renderer.render(app.stage);
}
