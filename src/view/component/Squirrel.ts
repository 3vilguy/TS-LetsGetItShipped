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
        this.tfShip.x = (this.bubble.width - this.tfShip.width) * 0.5;
        this.tfShip.y = this.bubble.height * 0.15;
        this.addChild(this.tfShip);
        
        
        const styleBot = styleTop.clone();
        styleBot.fontSize = 70;

        this.tfIt = new Text('IT', styleBot);
        this.tfIt.x = (this.bubble.width - this.tfIt.width) * 0.5;
        this.tfIt.y = this.bubble.height * 0.4;
        this.addChild(this.tfIt);
    }

    public showAnimation() {
        var startingX : number = this.x;

        var moveLeftTime : number = 0.1;
        var stayTime : number = 0.8;

        TweenLite.to(this, moveLeftTime, {x: startingX - this.width});
        TweenLite.to(this, moveLeftTime, {x: startingX, delay: stayTime});
    }
}
