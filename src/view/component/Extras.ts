import { Container, Sprite } from 'pixi.js';

import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class Extras extends Container {
    private mensah : Sprite;
    private joe : Sprite;

    constructor() {
        super();
        this.init();
    }

    private init() {
        var yPos:number = HEIGHT * 0.47;

        this.mensah = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/extras/Mensah.png')].texture);
        this.mensah.y = yPos;
        this.addChild(this.mensah);

        this.joe = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/extras/Joe.png')].texture);
        this.joe.x = WIDTH * 0.63;
        this.joe.y = yPos;
        this.addChild(this.joe);
    }
}