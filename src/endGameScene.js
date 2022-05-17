import {RestartButton} from './components/restartButton.js'

export class EndGame extends Phaser.Scene(){

    constructor(){
        super({key: 'endGameScene'});
        this.restartButton = new RestartButton(this);
    }

    preload(){
        this.restartButton.preload();
        this.load.image("titleGameOverImage","./assets/titleGameOver.png");
        this.registry.events.on('nameWinnerPlayer', (textPlayerWinner) =>{
            this.textWinner =  textPlayerWinner+'HAS WON';
        });
        
    }

    create(){
        this.restartButton.create();
        this.add.image(400,300, "titleGameOverImage");

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


        this.playButton = this.add.image(550,300, "playButtonImage").setDepth(1);

        this.playButton.setInteractive();

        this.playButton.on("pointerdown" ,() =>{
            this.scene.start('gameScene');

        })
    }
}