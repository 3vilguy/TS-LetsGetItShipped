import { Container } from 'pixi.js';

export default class MonitorNormal extends Container {
    constructor() {
        super();
        this.init();
    }

    private init() {
        var monitor = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/desk/screen01.png')].texture);
        this.addChild(monitor);

        var glare = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/desk/glare01.png')].texture);
        glare.x = 18;
        glare.y = 15;
        glare.alpha = 0.4;
        this.addChild(glare);
    }
}