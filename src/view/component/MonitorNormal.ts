import { Container, Sprite, Text, TextStyle } from 'pixi.js';

export default class MonitorNormal extends Container {
    private monitor : Sprite;
    private glare : Sprite;
    private menu : Text;

    constructor() {
        super();
        this.init();
    }

    private init() {
        this.monitor = new Sprite(PIXI.loader.resources[require('../../../assets/images/desk/screen01.png')].texture);
        this.addChild(this.monitor);

        this.glare = new Sprite(PIXI.loader.resources[require('../../../assets/images/desk/glare01.png')].texture);
        this.glare.x = 18;
        this.glare.y = 15;
        this.glare.alpha = 0.4;
        this.addChild(this.glare);
    }

    public addMenu() {
        const menuStyle = new TextStyle({
            fill: "white",
            fontWeight: "bold",
            strokeThickness: 4,
            fontSize: 30
        });

        this.menu = new Text('1 - Fun Friday\n2 - Medium\n3 - Mediumer', menuStyle);
        this.menu.x = this.glare.x + (this.glare.width - this.menu.width) * 0.5;
        this.menu.y = this.glare.y + (this.glare.height - this.menu.height) * 0.5;
    }

    public showTasks() {
        if(this.menu) {
            this.addChild(this.menu);
        }
    }

    public removeTasks() {
        if(this.menu) {
            this.removeChild(this.menu);
        }
    }
}