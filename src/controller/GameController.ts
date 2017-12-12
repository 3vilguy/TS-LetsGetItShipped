import GameScreen from '../view/screen/GameScreen';

export default class MainController {
    private gameScreen : GameScreen;
    private diffLvl : number;
    private randKey : string;
    private count : number;
    private maxCount : number;

    constructor(gameScreen:GameScreen) {
        this.gameScreen = gameScreen;
    }

    public startGame() {
        this.gameScreen.start();

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

            this.gameScreen.removeTaskPicker();
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

                this.gameScreen.start();
            }
        }
    }
}