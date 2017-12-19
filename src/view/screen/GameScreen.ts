import { Container } from 'pixi.js';

import Desk from '../component/Desk';
import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class GameScreen extends Container {
    private desk : Desk;

    constructor() {
        super();
        this.init();
    }

    private init() {
        this.desk = new Desk();
        this.desk.x = (WIDTH - this.desk.width) * 0.5;
        this.desk.y = HEIGHT * 0.7;
    }

    public start() {
        this.addChild(this.desk);
        this.desk.showTasks();
    }

    public removeTaskPicker() {
        this.desk.removeTasks();
    }
}