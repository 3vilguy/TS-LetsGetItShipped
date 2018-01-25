import { Container, Sprite } from 'pixi.js';
import { TweenLite, TimelineLite } from 'gsap';

import {
    HEAD_UP_ANIMATION_TIME_SEC,
    HEAD_UP_TIME_SEC,
    HEAD_DOWN_ANIMATION_TIME_SEC,
    DELAY_BETWEEN_ANIMATIONS_SEC
} from '../../constants/Config';
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

        this.mensah = new Sprite(PIXI.loader.resources[require('../../../assets/images/extras/Mensah.png')].texture);
        this.mensah.y = yPos;
        this.addChild(this.mensah);

        this.joe = new Sprite(PIXI.loader.resources[require('../../../assets/images/extras/Joe.png')].texture);
        this.joe.x = WIDTH * 0.63;
        this.joe.y = yPos;
        this.addChild(this.joe);

        TweenLite.delayedCall(2, this.startTween);
    }

    private startTween = () => {
        var sprite:Sprite;
        if(Math.random() < 0.5) {
            sprite = this.mensah;
        } else {
            sprite = this.joe;
        }
        var startY:number = sprite.y;

        var tl = new TimelineLite( {onComplete: this.onTweenFinished} );
        tl.add( TweenLite.to(sprite, HEAD_UP_ANIMATION_TIME_SEC, {y: startY - 150}) );
        tl.add( TweenLite.to(sprite, HEAD_DOWN_ANIMATION_TIME_SEC, {y: startY, delay: HEAD_UP_TIME_SEC}) );
    }

    private onTweenFinished = () => {
        TweenLite.delayedCall(DELAY_BETWEEN_ANIMATIONS_SEC, this.startTween);
    }
}