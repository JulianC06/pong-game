export class MenuScene extends Phaser.Scene{
    constructor(){
        super({key: 'menuScene'});
    }

    preload(){
        this.load.image("playButtonImage","./assets/button_play.png");
        this.load.image("backgroundImage","./assets/backgroundImage.png");
    }

    create(){
        this.add.image(500,300, "backgroundImage");
        this.playButton = this.add.image(550,300, "playButtonImage").setDepth(1);

        this.playButton.setInteractive();

        this.playButton.on("pointerdown" ,() =>{
            this.scene.start('gameScene');

        })
    }


}