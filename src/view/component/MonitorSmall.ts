import { Container, Sprite } from 'pixi.js';

export default class MonitorSmall extends Container {
    private progressBar : PIXI.extras.AnimatedSprite;
    private over9000 : PIXI.extras.AnimatedSprite;

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


        var textures_9000 = [];
        for(var i = 0; i<= 57; i++) {
            if(i < 10) {
                textures_9000.push( PIXI.loader.resources[require('../../../assets/images/desk/pickle/Pickle_Rick_0' + i + '.png')].texture );
            } else {
                textures_9000.push( PIXI.loader.resources[require('../../../assets/images/desk/pickle/Pickle_Rick_' + i + '.png')].texture );
            }
        }

        this.over9000 = new PIXI.extras.AnimatedSprite(textures_9000);
        this.over9000.x = -78;
        this.over9000.y = -280
        this.over9000.visible = false;
        this.addChild(this.over9000);


        var textures_pb = [];
        for(var i = 0; i<= 100; i++) {
            if(i < 10) {
                textures_pb.push( PIXI.loader.resources[require('../../../assets/images/desk/progress/ProgressBar-00' + i + '.png')].texture );
            } else if(i < 100) {
                textures_pb.push( PIXI.loader.resources[require('../../../assets/images/desk/progress/ProgressBar-0' + i + '.png')].texture );
            } else {
                textures_pb.push( PIXI.loader.resources[require('../../../assets/images/desk/progress/ProgressBar-' + i + '.png')].texture );
            }
        }

        this.progressBar = new PIXI.extras.AnimatedSprite(textures_pb);
        this.progressBar.x = 25;
        this.progressBar.y = 11;
        this.addChild(this.progressBar);
    }

    public setProgress(progress:number) {
        this.progressBar.gotoAndStop(progress);
        this.over9000.visible = false;
        this.over9000.gotoAndStop(0);
    }

    public setPickleRickEnding() {
        this.progressBar.play();
        this.over9000.visible = true;
        this.over9000.play();
    }
}