import { Container } from 'pixi.js';

export default class Dave extends Container {
    private mc : PIXI.extras.AnimatedSprite;
    private isTyping : boolean = false;

    constructor() {
        super();
        this.init();
    }

    private init() {
        var textures = [];
        for (var i=0; i <= 28; i++)
        {
            if(i<10) {
                textures.push( PIXI.loader.resources[require('../../../assets/images/dave/dave 2_0000' + i + '.png')].texture );
            } else {
                textures.push( PIXI.loader.resources[require('../../../assets/images/dave/dave 2_000' + i + '.png')].texture );
            }
        }

        this.mc = new PIXI.extras.AnimatedSprite(textures);
        this.mc.animationSpeed = 0.6;
        this.mc.loop = false;
        this.mc.onComplete = this.onAnimationComplete;
        this.addChild(this.mc);
    }

    public playAnimation() {
        this.mc.play();
    }

    private onAnimationComplete = () => {
        if(this.isTyping) {
            this.isTyping = false;
            this.mc.gotoAndPlay(0);
        }
    }

    public showTyping() {
        if(this.mc.playing) {
            this.isTyping = true;
        } else {
            this.mc.gotoAndPlay(0);
        }
    }
}