import { Container, Sprite } from 'pixi.js';

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
    }
}