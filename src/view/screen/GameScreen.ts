import { Container } from 'pixi.js';

import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class GameScreen extends Container {
    private header:PIXI.Text;
    private menu:PIXI.Text;
    private diffLvl:number;
    private randKey:string;
    private count:number;
    private maxCount:number;

    constructor() {
        super();
        this.init();
    }

    private init() {
        // Add top text
        const headerStyle = new PIXI.TextStyle({
            fill: "white",
            fontWeight: "bold",
            strokeThickness: 4
        });
        this.header = new PIXI.Text('Pick a task:', headerStyle);
        this.header.x = (WIDTH - this.header.width) * 0.5;

        // Add task options
        const menuStyle = headerStyle.clone();
        menuStyle.fontSize = 20;

        this.menu = new PIXI.Text('1 - EZ\n2 - Medium\n3 - Mediumer', menuStyle);
        this.menu.x = this.header.x;
        this.menu.y = this.header.y + this.header.height;
    }

    private addTaskPicker() {
        this.addChild(this.header);
        this.addChild(this.menu);
    }

    private removeTaskPicker() {
        this.removeChild(this.header);
        this.removeChild(this.menu);
    }

    public start() {
        this.addTaskPicker();
        // Pick the task first
        window.addEventListener('keyup', this.handlePickTask);
    }

    private handlePickTask = (event:KeyboardEvent) => {
        // console.log(event.char, event.charCode, event.code);
        // console.log(event.key, event.keyCode);

        var weGood = true;
        this.diffLvl = 0;
        switch(event.key)
        {
            case "1":
                console.log("EZ");
                this.diffLvl = 1;
                this.maxCount = 5;
                break;
            case "2":
                console.log("Medium");
                this.diffLvl = 2;
                this.maxCount = 10;
                break;
            case "3":
                console.log("Hard");
                this.diffLvl = 3;
                this.maxCount = 15;
                break;

            default:
                console.log("Default");
                weGood = false;
                break;
        }

        if(weGood) {
            window.removeEventListener('keyup', this.handlePickTask);
            console.log("Picked lvl => " + this.diffLvl);

            this.removeTaskPicker();
            this.startMashing();
        }
    }

    private startMashing() {
        this.randKey = "KeyL";
        this.count = 0;
        window.addEventListener('keyup', this.handleKeyMashing);
    }

    private handleKeyMashing = (event:KeyboardEvent) => {
        console.log(event.code);
        if(event.code == this.randKey) {
            this.count++;

            if(this.count >= this.maxCount) {
                console.log("Task done");
                window.removeEventListener('keyup', this.handleKeyMashing);

                this.start();
            }
        }
    }
}