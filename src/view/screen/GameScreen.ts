import { Container } from 'pixi.js';

import TaskPicker from '../component/TaskPicker';
import Desk from '../component/Desk';
import { WIDTH, HEIGHT } from '../../constants/RendererConstants';

export default class GameScreen extends Container {
    private desk:Desk;
    private taskPicker:TaskPicker;
    private diffLvl:number;
    private randKey:string;
    private count:number;
    private maxCount:number;

    constructor() {
        super();
        this.init();
    }

    private init() {
        this.desk = new Desk();
        this.desk.x = (WIDTH - this.desk.width) * 0.5;
        this.desk.y = HEIGHT * 0.7;

        this.taskPicker = new TaskPicker();
        this.taskPicker.x = (WIDTH - this.taskPicker.width) * 0.5;
    }

    public start() {
        this.addChild(this.desk);
        this.addChild(this.taskPicker);
        // Pick the task first
        window.addEventListener('keyup', this.handlePickTask);
    }

    private handlePickTask = (event:KeyboardEvent) => {
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

            this.removeChild(this.taskPicker);
            this.startMashing();
        }
    }

    private startMashing() {
        var allKeys = [
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
            "A", "S", "D", "F", "G", "H" ,"J", "K", "L",
            "Z", "X", "C", "V", "B", "N", "M"
        ];
        var randKey = allKeys[Math.floor(Math.random()*allKeys.length)];
        console.log("RANDOM KEY => " + randKey);
        this.randKey = "Key" + randKey;
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