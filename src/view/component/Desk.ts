import { Container, Sprite } from 'pixi.js';

import MonitorSmall from './MonitorSmall';
import MonitorNormal from './MonitorNormal';

export default class Desk extends Container {
    private monitorLeft : MonitorNormal;
    private monitorMid : MonitorSmall;

    constructor() {
        super();
        this.init();
    }

    private init() {
        var desk = new Sprite(PIXI.loader.resources[require('../../../assets/images/desk/desk.png')].texture);
        this.addChild(desk);

        var cables = new Sprite(PIXI.loader.resources[require('../../../assets/images/desk/cables.png')].texture);
        cables.x = 350;
        cables.y = 20;
        this.addChild(cables);

        this.monitorLeft = new MonitorNormal();
        this.monitorLeft.x = 140;
        this.monitorLeft.y = -170;
        this.monitorLeft.addMenu();
        this.addChild(this.monitorLeft);
        
        this.monitorMid = new MonitorSmall();
        this.monitorMid.x = 495;
        this.monitorMid.y = -140;
        this.addChild(this.monitorMid);

        var monitorRight = new MonitorNormal();
        monitorRight.x = 815;
        monitorRight.y = this.monitorLeft.y;
        this.addChild(monitorRight);

        var bottle = new Sprite(PIXI.loader.resources[require('../../../assets/images/desk/bottle.png')].texture);
        bottle.x = 430;
        bottle.y = -30;
        this.addChild(bottle);
    }

    public setProgress(progress:number) {
        this.monitorMid.setProgress(progress);
    }

    public setPickleRickEnding() {
        this.monitorMid.setPickleRickEnding();
    }

    public showTasks() {
        this.monitorLeft.showTasks();
    }

    public removeTasks() {
        this.monitorLeft.removeTasks();
    }
}