import * as PIXI from 'pixi.js';
import { Howl } from 'howler';
import { TweenLite, Linear } from 'gsap';

import MainController from './controller/MainController';
import { WIDTH, HEIGHT, BG_COLOR } from './constants/RendererConstants';

// Set default Easing for Tweens
TweenLite.defaultEase = Linear.easeNone;

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

// Prepare animation arrays list
var arr_progress_bar = [];
for(var i = 0; i<= 100; i++) {
    if(i < 10) {
        arr_progress_bar.push( require('../assets/images/desk/progress/ProgressBar-00' + i + '.png') );
    } else if(i < 100) {
        arr_progress_bar.push( require('../assets/images/desk/progress/ProgressBar-0' + i + '.png') );
    } else {
        arr_progress_bar.push( require('../assets/images/desk/progress/ProgressBar-' + i + '.png') );
    }
}

var arr_dave = [];
for(var i = 0; i<= 28; i++) {
    if(i < 10) {
        arr_dave.push( require('../assets/images/dave/dave 2_0000' + i + '.png') );
    } else {
        arr_dave.push( require('../assets/images/dave/dave 2_000' + i + '.png') );
    }
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
        require('../assets/images/extras/Joe.png'),
        require('../assets/images/extras/Mensah.png')
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
    .add(arr_progress_bar)
    .add([
        require('../assets/images/ui/key.png'),
        require('../assets/images/ui/keyPressed.png')
    ])
    .add(arr_dave)
    .load(onAssetsLoaded);

function onAssetsLoaded() {
    init();

    // Start bg sound
    const sound = new Howl({
        src: [require('../assets/audio/Timetravel_Mu_BaseMusic.mp3')],
        loop: true
    });
    sound.play();
}

function init() {
    var gameController:MainController = new MainController(app.stage);
    app.ticker.add(update);
}

function update() {
    app.renderer.render(app.stage);
}
