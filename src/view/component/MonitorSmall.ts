import { Container } from 'pixi.js';

export default class MonitorSmall extends Container {
    constructor() {
        super();
        this.init();
    }

    private init() {
        var monitor = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/desk/screen02.png')].texture);
        this.addChild(monitor);

        var glare = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/desk/glare02.png')].texture);
        glare.x = 12;
        glare.y = 10;
        glare.alpha = 0.4;
        this.addChild(glare);
    }
}