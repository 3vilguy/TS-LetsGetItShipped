import { Container, Sprite, Text, TextStyle } from 'pixi.js';
import { TweenLite, Back } from 'gsap';

import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class InitScreen extends Container {
    private tf : Text;

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

        var topS = new Sprite(PIXI.loader.resources[require('../../../assets/images/intro/S.png')].texture);
        top.addChild(topS);

        var topH = new Sprite(PIXI.loader.resources[require('../../../assets/images/intro/H.png')].texture);
        topH.x = topS.x + topS.width * 0.5;
        top.addChild(topH);

        var topI = new Sprite(PIXI.loader.resources[require('../../../assets/images/intro/I.png')].texture);
        topI.x = topH.x + topH.width * 0.4;
        top.addChild(topI);

        var topP = new Sprite(PIXI.loader.resources[require('../../../assets/images/intro/P.png')].texture);
        topP.x = topI.x + topI.width * 0.4;
        top.addChild(topP);


        // Add bot letters
        var bot:Container = new Container();
        bot.scale.set(0.7, 0.7);
        bot.y = 200;
        this.addChild(bot);

        var botI = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/intro/I.png')].texture);
        bot.addChild(botI);

        var botT = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/intro/T.png')].texture);
        botT.x = botI.x + botI.width * 0.4;
        bot.addChild(botT);


        // Add squirrel
        var squirrel = new Sprite(PIXI.loader.resources[require('../../../assets/images/intro/ship-it-squirrel.png')].texture);
        squirrel.anchor.set(0.5, 0.5);
        squirrel.x = WIDTH * 0.85;
        squirrel.y = HEIGHT * 0.8;
        squirrel.scale.set(0, 0);
        this.addChild(squirrel);



        // Hide top letters above screen
        topS.y = topH.y = topI.y = topP.y = -topS.width;
        botI.y = botT.y = HEIGHT;


        // Tween the shit out of it
        var letterDownTime = 0.2;
        var letterDelayTime = 0.1;
        var letterUpTime = 0.3;
        var squirrelScaleTime = 0.5;
        
        TweenLite.to(topS, letterDownTime, {y: 0, delay: letterDelayTime, ease: Back.easeOut});
        TweenLite.to(topH, letterDownTime, {y: 0, delay: letterDelayTime * 2, ease: Back.easeOut});
        TweenLite.to(topI, letterDownTime, {y: 0, delay: letterDelayTime * 3, ease: Back.easeOut});
        TweenLite.to(topP, letterDownTime, {y: 0, delay: letterDelayTime * 4, ease: Back.easeOut});

        TweenLite.to(botI, letterUpTime, {y: 0, delay: letterDelayTime * 6, ease: Back.easeOut});
        TweenLite.to(botT, letterUpTime, {y: 0, delay: letterDelayTime * 8, ease: Back.easeOut});

        TweenLite.to(squirrel.scale, squirrelScaleTime, {x: 1, y: 1, delay: letterDelayTime * 10, ease: Back.easeOut.config(4)});
    }

    public showInstructions() {
        // Add press SPACE text
        const menuStyle = new TextStyle({
            fill: "white",
            fontWeight: "bold",
            strokeThickness: 4,
            fontSize: 32
        });

        this.tf = new Text('PRESS SPACE !', menuStyle);
        this.tf.x = (WIDTH - this.tf.width) * 0.5;
        this.tf.y = HEIGHT * 0.93;
        this.tf.alpha = 0;
        this.addChild(this.tf);

        TweenLite.delayedCall(1, this.blink);
    }

    private blink = () => {
        TweenLite.to(this.tf, 0.3, {
            alpha: 0,
            delay: 0.6,
            onComplete: () => {
                TweenLite.to(this.tf, 0.3, {
                    alpha: 1,
                    delay: 0.3,
                    onComplete: this.blink
                });
            }
        });
    }

    public hideInstructions() {
        TweenLite.killTweensOf(this.tf);
        this.tf.alpha = 0;
    }
}