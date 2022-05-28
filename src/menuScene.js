export class MenuScene extends Phaser.Scene{
    constructor(){
        super({key: 'menuScene'});
    }

    preload(){
        this.load.image("titleGameImage","./assets/TitleGame.png");
        this.load.spritesheet('playButtonImage', './assets/button_play.png',{frameWidth: 243, frameHeight : 100});
        this.load.image("backgroundImage","./assets/backgroundImage.png");
    }

    create(){
        this.add.image(500,300, "backgroundImage");
        this.add.image(600,200, "titleGameImage")
        this.playButton = this.add.sprite(512,500, 'playButtonImage').setInteractive();

        this.playButton.setInteractive();

        this.playButton.on('pointerover', () =>{
            this.playButton.setFrame(1);
        })

        this.playButton.on('pointerout', () =>{
            this.playButton.setFrame(0);
        })

        this.playButton.on("pointerdown" ,() =>{
            this.scene.start('gameScene');

        })
    }


}