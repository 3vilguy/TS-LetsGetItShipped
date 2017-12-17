import { Container } from 'pixi.js';

import MonitorSmall from './MonitorSmall';
import MonitorNormal from './MonitorNormal';

export default class Desk extends Container {
    private monitorMid : MonitorSmall;

    constructor() {
        super();
        this.init();
    }

    private init() {
        var desk = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/desk/desk.png')].texture);
        this.addChild(desk);

        var cables = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/desk/cables.png')].texture);
        cables.x = 350;
        cables.y = 20;
        this.addChild(cables);


        var monitorLeft = new MonitorNormal();
        monitorLeft.x = 140;
        monitorLeft.y = -170;
        this.addChild(monitorLeft);
        
        this.monitorMid = new MonitorSmall();
        this.monitorMid.x = 495;
        this.monitorMid.y = -140;
        this.addChild(this.monitorMid);

        var monitorRight = new MonitorNormal();
        monitorRight.x = 815;
        monitorRight.y = monitorLeft.y;
        this.addChild(monitorRight);


        var bottle = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/desk/bottle.png')].texture);
        bottle.x = 430;
        bottle.y = -30;
        this.addChild(bottle);
    }

    public showTasks() {
        this.monitorMid.showTasks();
    }

    public removeTasks() {
        this.monitorMid.removeTasks();
    }
}