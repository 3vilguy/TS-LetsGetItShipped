import { Container } from 'pixi.js';

import TaskPicker from '../component/TaskPicker';
import Desk from '../component/Desk';
import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class GameScreen extends Container {
    private desk:Desk;
    private taskPicker:TaskPicker;

    constructor() {
        super();
        this.init();
    }

    private init() {
        this.desk = new Desk();
        this.desk.x = (WIDTH - this.desk.width) * 0.5;
        this.desk.y = HEIGHT * 0.7;

        this.taskPicker = new TaskPicker();
        this.taskPicker.x = (WIDTH - this.taskPicker.width) * 0.5;
    }

    public start() {
        this.addChild(this.desk);
        this.addChild(this.taskPicker);
    }

    public removeTaskPicker() {
        this.removeChild(this.taskPicker);
    }
}