import MainView from '../view/MainView';

export default class GameController {
    private stage : PIXI.Container;
    private mainView : MainView;

    constructor(stage:PIXI.Container) {
        this.stage = stage;
        this.init();
    }

    private init() {
        this.mainView = new MainView();
        this.stage.addChild(this.mainView);

        // Any key to start
        window.addEventListener('keyup', this.handleKeyPress);
    }

    private handleKeyPress = (event:KeyboardEvent) => {
        window.removeEventListener('keyup', this.handleKeyPress);

        this.mainView.hideInitScreen();
    }
}