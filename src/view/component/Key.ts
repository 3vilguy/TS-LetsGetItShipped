import { Container, Sprite, Text, TextStyle } from 'pixi.js';

export default class Key extends Container {
    private keyUp : Sprite;
    private keyDown : Sprite;
    private tf : Text;

    constructor() {
        super();
        this.init();
    }

    private init() {
        this.keyDown = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/ui/keyPressed.png')].texture);
        this.addChild(this.keyDown);

        this.keyUp = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/ui/key.png')].texture);
        this.addChild(this.keyUp);

        // Add tasks:
        const menuStyle = new TextStyle({
            fontWeight: "bold",
            fontSize: 50
        });

        this.tf = new Text('', menuStyle);
        this.addChild(this.tf);
    }

    public setChar(keyChar:string) {
        this.tf.text = keyChar;
        this.tf.x = (this.keyDown.width - this.tf.width) * 0.5;
        this.tf.y = (this.keyDown.height - this.tf.height) * 0.5;
    }
}