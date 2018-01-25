import { Container } from 'pixi.js';
import Key from './Key';

export default class KeyBar extends Container {
    private container : Container;
    private keyChar : string;
    private key : Key;

    constructor() {
        super();
        this.init();
    }

    private init() {
        this.container = new Container();
        this.addChild(this.container);

        this.key = new Key();
        this.container.addChild(this.key);

        this.center();
    }

    private center() {
        this.container.x = -this.container.width * 0.5;
    }

    public setKeyChar(keyChar:string) {
        this.keyChar = keyChar;
        this.key.setChar(this.keyChar);
    }

    public getKeyChar() {
        return this.keyChar;
    }

    public getKey() {
        return this.key;
    }
}