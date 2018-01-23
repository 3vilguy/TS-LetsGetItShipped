import { Container } from 'pixi.js';

import Dave from '../component/Dave';
import Desk from '../component/Desk';
import KeyBar from '../component/KeyBar';
import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class GameScreen extends Container {
    private keyBar : KeyBar;
    private desk : Desk;
    private dave : Dave;

    constructor() {
        super();
        this.init();
    }

    private init() {
        // Add bar with key to press
        this.keyBar = new KeyBar();
        this.keyBar.x = WIDTH * 0.5;
        this.keyBar.y = HEIGHT * 0.05;

        // Add the desk
        this.desk = new Desk();
        this.desk.x = (WIDTH - this.desk.width) * 0.5;
        this.desk.y = HEIGHT * 0.7;

        // Add animated David :D
        this.dave = new Dave();
    }

    public setKeyChar(key:string) {
        this.keyBar.setKeyChar(key);
    }

    public start() {
        this.removeChild(this.keyBar);
        this.addChild(this.desk);
        this.desk.showTasks();
        this.showDavid();
    }

    public removeTaskPicker() {
        this.desk.removeTasks();
    }

    public showKeyBar() {
        this.addChild(this.keyBar);
    }

    public showDavid() {
        this.addChild(this.dave);
        this.dave.playAnimation();
    }
}