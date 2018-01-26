import { Container } from 'pixi.js';

import Dave from '../component/Dave';
import Desk from '../component/Desk';
import Extras from '../component/Extras';
import KeyBar from '../component/KeyBar';
import Squirrel from '../component/Squirrel';
import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class GameScreen extends Container {
    private layerBot : Container;
    private layerTop : Container;
    private keyBar : KeyBar;
    private desk : Desk;
    private dave : Dave;
    private extrasLayer : Extras;
    private squirrel : Squirrel;

    constructor() {
        super();
        this.init();
    }

    private init() {
        // Making containers, so we can layer things like we want
        this.layerBot = new Container();
        this.layerTop = new Container();
        this.addChild(this.layerBot);
        this.addChild(this.layerTop);


        // Add bar with key to press
        this.keyBar = new KeyBar();
        this.keyBar.x = WIDTH * 0.5;
        this.keyBar.y = HEIGHT * 0.05;

        // Add extras layer
        this.extrasLayer = new Extras();
        this.layerBot.addChild(this.extrasLayer);

        // Add the desk
        this.desk = new Desk();
        this.desk.x = (WIDTH - this.desk.width) * 0.5;
        this.desk.y = HEIGHT * 0.72;

        // Add animated David :D
        this.dave = new Dave();
        this.dave.y = HEIGHT * 0.05;

        // Add SHIP IT! suirrel
        this.squirrel = new Squirrel();
        this.squirrel.x = window.innerWidth - 100;
        this.squirrel.y = HEIGHT - this.squirrel.height;
        // console.log(this.squirrel.getGlobalPosition());
    }

    public setProgress(progress:number) {
        this.desk.setProgress(progress);
        this.dave.showTyping();
    }

    public setPickleRickEnding() {
        this.desk.setPickleRickEnding();
    }

    public setKeyChar(key:string) {
        this.keyBar.setKeyChar(key);
    }

    public getKeyChar() {
        return this.keyBar.getKeyChar();
    }

    public getKeyBar() {
        return this.keyBar;
    }

    public start() {
        this.layerTop.removeChild(this.keyBar);
        this.layerBot.addChild(this.desk);
        this.desk.showTasks();
        this.showDavid();

        // MEGA HACK to position squirrel right after right edge of the screen
        this.squirrel.x = (window.innerWidth - this.parent.parent.x) / this.parent.parent.scale.x;
        this.layerTop.addChild(this.squirrel);
    }

    public removeTaskPicker() {
        this.desk.removeTasks();
    }

    public showKeyBar() {
        this.layerTop.addChild(this.keyBar);
    }

    public showDavid() {
        this.layerBot.addChild(this.dave);
        // this.dave.playAnimation();
    }

    public showSquirrelAnimation() {
        this.squirrel.showAnimation();
    }
}