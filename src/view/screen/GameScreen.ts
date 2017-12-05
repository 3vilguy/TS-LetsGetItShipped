import { Container } from 'pixi.js';

import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class GameScreen extends Container {
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
        const header = new PIXI.Text('Pick a task:', headerStyle);
        header.x = (WIDTH - header.width) * 0.5;
        this.addChild(header);

        // Add task options
        const menuStyle = headerStyle.clone();
        menuStyle.fontSize = 20;

        const menu = new PIXI.Text('1 - EZ\n2 - Medium\n3 - Mediumer', menuStyle);
        menu.x = header.x;
        menu.y = header.y + header.height;
        this.addChild(menu);
    }
}