import { Container } from 'pixi.js';

import MainView from '../view/MainView';
import GameController from './GameController';

export default class MainController {
    private stage : Container;
    private mainView : MainView;
    private gameController : GameController;

    constructor(stage:Container) {
        this.stage = stage;
        this.init();
    }

    private init() {
        this.mainView = new MainView();
        this.stage.addChild(this.mainView);

        this.gameController = new GameController(this.mainView.GAME_SCREEN);

        this.mainView.showInitScreenInstruction();

        // Any key to start
        window.addEventListener('keyup', this.handleKeyPress);
    }

    private handleKeyPress = (event:KeyboardEvent) => {
        if(event.code == "Space") {
            window.removeEventListener('keyup', this.handleKeyPress);

            // Switch from init screen to game
            this.mainView.hideInitScreen();
            this.mainView.addGameScreen();

            this.gameController.startGame();
        }
    }
}