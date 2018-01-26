import { Howl } from 'howler';
import GameScreen from '../view/screen/GameScreen';

export default class MainController {
    private gameScreen : GameScreen;
    private diffLvl : number;
    private randKeys : string[];
    private selectedKey: string;
    private count : number;
    private maxCount : number;
    private sndShipIt : Howl;
    private whateverRick : Howl;
    private tinyRick : Howl;
    private pickleRick : Howl;

    constructor(gameScreen:GameScreen) {
        this.gameScreen = gameScreen;
        this.sndShipIt = new Howl({
            src: [require('../../assets/audio/ShipIt-2.ogg')]
        });
        this.whateverRick = new Howl({
            src: [require('../../assets/audio/GetOuttaHere.ogg')]
        });
        this.tinyRick = new Howl({
            src: [require('../../assets/audio/whatever_rick.mp3')]
        });
        this.pickleRick = new Howl({
            src: [require('../../assets/audio/pickle_rick.mp3')]
        });
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
            this.gameScreen.showKeyBar();
            this.startMashing();
        }
    };

    private startMashing() {
        if (this.diffLvl == 1) {
            this.easyLevel();
        } else if (this.diffLvl == 2) {
            this.mediumLevel();
        } else {
            this.difficultLevel();
        }
    }

    private easyLevel() {
        this.whateverRick.play();
        var allKeys = [
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
            "A", "S", "D", "F", "G", "H" ,"J", "K", "L",
            "Z", "X", "C", "V", "B", "N", "M"
        ];
        var randKey = allKeys[Math.floor(Math.random()*allKeys.length)];
        console.log("RANDOM KEY => " + randKey);
        this.randKeys = ["Key" + randKey];
        this.count = 0;
        this.gameScreen.setProgress(0);
        this.setRandomKey();
        window.addEventListener('keyup', this.handleKeyMashing);
    }

    private mediumLevel() {
        this.tinyRick.play();
        var allKeys = [
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
            "A", "S", "D", "F", "G", "H" ,"J", "K", "L",
            "Z", "X", "C", "V", "B", "N", "M"
        ];
        var randKey1 = allKeys[Math.floor(Math.random()*allKeys.length)];
        var randKey2 = allKeys[Math.floor(Math.random()*allKeys.length)];
        var randKey3 = allKeys[Math.floor(Math.random()*allKeys.length)];
        console.log("RANDOM KEYS => " + randKey1 + " " + randKey2 + " " + randKey3);
        this.randKeys = ["Key" + randKey1, "Key" + randKey2, "Key" + randKey3, ];
        this.count = 0;
        this.gameScreen.setProgress(0);
        this.setRandomKey();
        window.addEventListener('keyup', this.handleKeyMashing);
    }

    private difficultLevel() {
        this.pickleRick.play();
        var allKeys = [
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
            "A", "S", "D", "F", "G", "H" ,"J", "K", "L",
            "Z", "X", "C", "V", "B", "N", "M"
        ];
        var randKey1 = allKeys[Math.floor(Math.random()*allKeys.length)];
        var randKey2 = allKeys[Math.floor(Math.random()*allKeys.length)];
        var randKey3 = allKeys[Math.floor(Math.random()*allKeys.length)];
        var randKey4 = allKeys[Math.floor(Math.random()*allKeys.length)];
        var randKey5 = allKeys[Math.floor(Math.random()*allKeys.length)];
        var randKey6 = allKeys[Math.floor(Math.random()*allKeys.length)];
        var randKey7 = allKeys[Math.floor(Math.random()*allKeys.length)];
        var randKey8 = allKeys[Math.floor(Math.random()*allKeys.length)];
        var randKey9 = allKeys[Math.floor(Math.random()*allKeys.length)];
        console.log("RANDOM KEYS => " + randKey1 + " " + randKey2 + " " + randKey3 + " " +
                randKey4 + " " + randKey5 + " " + randKey6 + " " +
                randKey7 + " " + randKey8 + " " + randKey9
        );
        this.randKeys = [
            "Key" + randKey1, "Key" + randKey2, "Key" + randKey3,
            "Key" + randKey4, "Key" + randKey5, "Key" + randKey6,
            "Key" + randKey7, "Key" + randKey8, "Key" + randKey9,
        ];
        this.count = 0;
        this.gameScreen.setProgress(0);
        this.setRandomKey();
        window.addEventListener('keyup', this.handleKeyMashing);
    }

    private setRandomKey() {
        this.selectedKey = this.randKeys[Math.floor(Math.random() * this.randKeys.length)];
        this.gameScreen.setKeyChar(this.selectedKey.split("Key", 2)[1]);
    }

    private handleKeyMashing = (event:KeyboardEvent) => {
        var key = this.gameScreen.getKeyBar().getKey();

        if(event.code.split("Key", 2)[1] == this.gameScreen.getKeyChar()) {
            key.press();
            this.count++;
            this.setRandomKey();

            var progress =  Math.round((100 * this.count) / this.maxCount);
            this.gameScreen.setProgress(progress);

            if(this.count >= this.maxCount) {
                console.log("Task done");
                this.sndShipIt.play();
                window.removeEventListener('keyup', this.handleKeyMashing);

                if (this.diffLvl == 3) {
                    this.gameScreen.setPickleRickEnding();
                }

                this.startGame();
            }
        }
    }
}