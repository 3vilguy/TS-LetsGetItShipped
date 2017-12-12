import { Container } from 'pixi.js';

import MonitorSmall from './MonitorSmall';
import MonitorNormal from './MonitorNormal';

export default class Desk extends Container {
    constructor() {
        super();
        this.init();
    }

    private init() {
        var desk = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/desk/desk.png')].texture);
        this.addChild(desk);

        var cables = new PIXI.Sprite(PIXI.loader.resources[require('../../../assets/images/desk/cables.png')].texture);
        cables.x = (desk.width - cables.width) * 0.5;
        this.addChild(cables);


        var monitorLeft = new MonitorNormal();
        monitorLeft.x = 140;
        monitorLeft.y = -170;
        this.addChild(monitorLeft);
        
        var monitorMid = new MonitorSmall();
        monitorMid.x = (desk.width - monitorMid.width) * 0.5;
        monitorMid.y = -140;
        this.addChild(monitorMid);

        var monitorRight = new MonitorNormal();
        monitorRight.x = 815;
        monitorRight.y = monitorLeft.y;
        this.addChild(monitorRight);
    }
}