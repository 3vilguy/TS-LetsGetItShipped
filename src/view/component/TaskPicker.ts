import { Container, Text, TextStyle } from 'pixi.js';

import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class TaskPicker extends Container {
    private header : Text;

    constructor() {
        super();
        this.init();
    }

    private init() {
        const headerStyle = new TextStyle({
            fill: "white",
            fontWeight: "bold",
            strokeThickness: 4
        });
        this.header = new Text('Pick a task:', headerStyle);
        this.addChild(this.header);
    }
}