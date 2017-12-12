import { Container } from 'pixi.js';

export default class Desk extends Container {
    constructor() {
        super();
        this.init();
    }

    private init() {
        var desk = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/desk/desk.png')].texture);
        this.addChild(desk);
    }
}