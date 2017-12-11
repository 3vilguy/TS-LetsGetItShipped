import { Container } from 'pixi.js';

import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class InitScreen extends Container {
    constructor() {
        super();
        this.init();
    }

    private init() {
        // Add bg pattern
        var background = new PIXI.extras.TilingSprite(
            PIXI.loader.resources[require('../../../assets/images/intro/pattern.png')].texture,
            WIDTH,
            HEIGHT
        );
        this.addChild(background);


        // Add top letters
        var top:Container = new Container();
        top.scale.set(0.4, 0.4);
        top.x = 80;
        this.addChild(top);

        var S = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/intro/S.png')].texture);
        top.addChild(S);

        var H = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/intro/H.png')].texture);
        H.x = S.x + S.width * 0.5;
        top.addChild(H);

        var I = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/intro/I.png')].texture);
        I.x = H.x + H.width * 0.4;
        top.addChild(I);

        var P = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/intro/P.png')].texture);
        P.x = I.x + I.width * 0.4;
        top.addChild(P);


        // Add bot letters
        var bot:Container = new Container();
        bot.scale.set(0.7, 0.7);
        bot.y = 200;
        this.addChild(bot);

        var I = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/intro/I.png')].texture);
        bot.addChild(I);

        var T = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/intro/T.png')].texture);
        T.x = I.x + I.width * 0.4;
        bot.addChild(T);


        // Add squirrel
        var squirrel = new PIXI.Sprite(
            PIXI.loader.resources[require('../../../assets/images/intro/ship-it-squirrel.png')].texture
        );
        squirrel.anchor.set(0.5, 0.5);
        squirrel.x = WIDTH * 0.85;
        squirrel.y = HEIGHT * 0.8;
        this.addChild(squirrel);
    }
}