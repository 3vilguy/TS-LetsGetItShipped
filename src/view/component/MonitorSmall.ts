import { Container, Sprite } from 'pixi.js';

export default class MonitorSmall extends Container {
    private progressBar : PIXI.extras.AnimatedSprite;

    constructor() {
        super();
        this.init();
    }

    private init() {
        var monitor = new Sprite(PIXI.loader.resources[require('../../../assets/images/desk/screen02.png')].texture);
        this.addChild(monitor);

        var glare = new Sprite(PIXI.loader.resources[require('../../../assets/images/desk/glare02.png')].texture);
        glare.x = 12;
        glare.y = 10;
        glare.alpha = 0.4;
        this.addChild(glare);

        var textures = [];
        for(var i = 0; i<= 100; i++) {
            if(i < 10) {
                textures.push( PIXI.loader.resources[require('../../../assets/images/desk/progress/ProgressBar-00' + i + '.png')].texture );
            } else if(i < 100) {
                textures.push( PIXI.loader.resources[require('../../../assets/images/desk/progress/ProgressBar-0' + i + '.png')].texture );
            } else {
                textures.push( PIXI.loader.resources[require('../../../assets/images/desk/progress/ProgressBar-' + i + '.png')].texture );
            }
        }

        this.progressBar = new PIXI.extras.AnimatedSprite(textures);
        this.progressBar.x = 25;
        this.progressBar.y = 11;
        this.addChild(this.progressBar);
    }

    public setProgress(progress:number) {
        this.progressBar.gotoAndStop(progress);
    }

    public setPickleRickEnding() {
        this.progressBar.play();
    }
}