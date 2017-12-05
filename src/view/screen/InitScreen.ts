import { Container } from 'pixi.js';

import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class InitScreen extends Container {
    constructor() {
        super();
        this.init();
    }

    private init() {
        // Add squirrel
        var squirrel = new PIXI.Sprite(
            PIXI.loader.resources[require('../../../assets/images/IntroSquirrel.jpg')].texture
        );
        squirrel.anchor.set(0.5, 0.5);
        squirrel.scale.set(0.5, 0.5);
        squirrel.x = WIDTH * 0.85;
        squirrel.y = HEIGHT * 0.7;
        this.addChild(squirrel);

        // Add simple text
        const style = new PIXI.TextStyle({
            fill: "white",
            fontSize: 140,
            fontWeight: "bold",
            strokeThickness: 4
        });
        const text = new PIXI.Text('Let\'s get it\nSHIPPED!', style);
        text.anchor.set(0.5, 0.5);
        text.x = WIDTH * 0.5;
        text.y = HEIGHT * 0.5;
        this.addChild(text);
    }
}