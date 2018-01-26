import { Container, Sprite, Text, TextStyle } from 'pixi.js';
import { TweenLite } from 'gsap';

export default class Squirrel extends Container {
    private squirrel : Sprite;
    private bubble : Sprite;
    private tfShip : Text;
    private tfIt : Text;

    constructor() {
        super();
        this.init();
    }

    private init() {
        this.squirrel = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/intro/ship-it-squirrel.png')].texture);
        this.addChild(this.squirrel);

        this.bubble = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/ui/chatBubble.png')].texture);
        this.bubble.scale.x = -1;
        this.bubble.x = this.bubble.width;
        this.addChild(this.bubble);

        this.squirrel.x = this.bubble.width - this.squirrel.width * 0.2;
        this.squirrel.y = this.bubble.height - this.squirrel.height * 0.5;

        // Add tasks:
        const styleTop = new TextStyle({
            fontWeight: "bold",
            fontSize: 60
        });

        this.tfShip = new Text('SHIP', styleTop);
        this.tfShip.pivot.x = this.tfShip.width * 0.5;
        this.tfShip.pivot.y = this.tfShip.height * 0.5;
        this.tfShip.x = this.bubble.width * 0.5;
        this.tfShip.y = this.bubble.height * 0.25;
        this.addChild(this.tfShip);
        
        
        const styleBot = styleTop.clone();
        styleBot.fontSize = 70;

        this.tfIt = new Text('IT', styleBot);
        this.tfIt.pivot.x = this.tfIt.width * 0.5;
        this.tfIt.pivot.y = this.tfIt.height * 0.5;
        this.tfIt.x = this.bubble.width * 0.5;
        this.tfIt.y = this.bubble.height * 0.55;
        this.addChild(this.tfIt);
    }

    public showAnimation() {
        this.tfShip.scale.set(0, 0);
        this.tfIt.scale.set(0, 0);

        var startingX = this.x;

        var moveLeftTime = 0.1;
        var tfScaleTime = 0.1;
        var tfDelayTime = 0.1;
        var stayTime = 0.8;

        TweenLite.to(this, moveLeftTime, {x: startingX - this.width});
        TweenLite.to(this.tfShip.scale, tfScaleTime, {x: 1, y: 1, delay: moveLeftTime});
        TweenLite.to(this.tfIt.scale, tfScaleTime, {x: 1, y: 1, delay: moveLeftTime + tfScaleTime + tfDelayTime});
        TweenLite.to(this, moveLeftTime, {x: startingX, delay: stayTime});
    }
}
