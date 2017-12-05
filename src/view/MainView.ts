import { Container, Sprite, Point } from 'pixi.js';

import InitScreen from './screen/InitScreen';
import { WIDTH, HEIGHT } from '../constants/RendererConstants';

export default class MainView extends Container {
    private initScreen : InitScreen;

    constructor() {
        super();
        this.init();
    }

    private init() {
        this.addTmpBg();
        this.addInitScreen();
    }

    private addTmpBg() {
        const bg = new PIXI.Graphics();
        bg.beginFill(0xFF0000);
        bg.drawRect(0, 0, WIDTH, HEIGHT);
        bg.endFill();
        this.addChild(bg);
    }

    private addInitScreen() {
        this.initScreen = new InitScreen();
        this.addChild(this.initScreen);
    }
}