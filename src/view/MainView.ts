import { Container, Sprite, Point } from 'pixi.js';

import InitScreen from './screen/InitScreen';
import GameScreen from './screen/GameScreen';
import { WIDTH, HEIGHT } from '../constants/RendererConstants';

export default class MainView extends Container {
    private initScreen : InitScreen;
    private gameScreen : GameScreen;

    constructor() {
        super();
        this.init();
    }

    private init() {
        this.addTmpBg();
        this.addInitScreen();
        this.initGameScren();
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

    private initGameScren() {
        this.gameScreen = new GameScreen();
        this.gameScreen.visible = false;
    }


    public hideInitScreen() {
        this.initScreen.visible = false;
    }

    public addGameScreen() {
        this.addChild(this.gameScreen);
        this.gameScreen.visible = true;
        this.gameScreen.start();
    }
}