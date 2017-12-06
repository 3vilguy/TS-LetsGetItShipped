import { Container } from 'pixi.js';

import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class TaskPicker extends Container {
    private header:PIXI.Text;
    private menu:PIXI.Text;

    constructor() {
        super();
        this.init();
    }

    private init() {
        // Add top text
        const headerStyle = new PIXI.TextStyle({
            fill: "white",
            fontWeight: "bold",
            strokeThickness: 4
        });
        this.header = new PIXI.Text('Pick a task:', headerStyle);
        this.addChild(this.header);

        // Add task options
        const menuStyle = headerStyle.clone();
        menuStyle.fontSize = 20;

        this.menu = new PIXI.Text('1 - EZ\n2 - Medium\n3 - Mediumer', menuStyle);
        this.menu.y = this.header.y + this.header.height;
        this.addChild(this.menu);
    }
}