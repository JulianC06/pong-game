import {RestartButton} from './components/restartButton.js'

export class EndGame extends Phaser.Scene {

    constructor(){
        super({key: 'endGameScene'});
        this.restartButton = new RestartButton(this);
    }

    preload(){
        this.restartButton.preload();
        this.load.image("titleGameOverImage","./assets/titleGameOver.png");
        this.GameScene = this.scene.get('GameScene');
        
        
    }

    create(){
        this.restartButton.create();
        this.add.image(512,200, "titleGameOverImage");
        this.registry.events.on('nameWinnerPlayer', (textPlayerWinner) =>{
            console.log(textPlayerWinner);
            this.textWinner =  textPlayerWinner+'HAS WON';
        });

        this.textPlayerWinner=this.add.text(
            this.physics.world.bounds.width/2,
            this.physics.world.bounds.height/2,
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