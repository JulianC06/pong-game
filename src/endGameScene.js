import {RestartButton} from './components/restartButton.js'

export class EndGame extends Phaser.Scene {

    constructor(){
        super({key: 'endGameScene'});
        this.restartButton = new RestartButton(this);
    }

    preload(){
        this.restartButton.preload();
        this.load.image("titleGameOverImage","./assets/titleGameOver.png");
       
        
        
    }
    init(data){
        this.GameScene = this.scene.get('GameScene');
        this.textWinner = data.winnerName.text +' has won';
    }

    create(){
        this.restartButton.create();
        this.add.image(512,200, "titleGameOverImage");
        this.textPlayerWinner=this.add.text(272,400,
            this.textWinner,
            {
                font:"48px Verdana",
                fill: "#fff",
                align:"center"
            }
        );
    }

    update(){
    
    }
}