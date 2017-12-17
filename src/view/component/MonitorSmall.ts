import { Container, Sprite, Text, TextStyle } from 'pixi.js';

export default class MonitorSmall extends Container {
    private menu : Text;

    constructor() {
        super();
        this.init();
    }

    private init() {
        var monitor = new Sprite(PIXI.loader.resources[require('../../../assets/images/desk/screen02.png')].texture);
        this.addChild(monitor);

        var glare = new Sprite(PIXI.loader.resources[require('../../../assets/images/desk/glare02.png')].texture);
        glare.x = 12;
        glare.y = 10;
        glare.alpha = 0.4;
        this.addChild(glare);

        // Add tasks:
        const menuStyle = new TextStyle({
            fill: "white",
            fontWeight: "bold",
            strokeThickness: 4,
            fontSize: 22
        });

        this.menu = new Text('1 - Fun Friday\n2 - Medium\n3 - Mediumer', menuStyle);
        this.menu.x = glare.x + (glare.width - this.menu.width) * 0.5;
        this.menu.y = glare.y + (glare.height - this.menu.height) * 0.5;
    }

    public showTasks() {
        this.addChild(this.menu);
    }

    public removeTasks() {
        this.removeChild(this.menu);
    }
}