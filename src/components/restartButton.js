export class RestartButton {
    constructor(scene){
        this.relatedScene = scene;
    }

    preload(){
        this.relatedScene.load.spritesheet('buttonRestart', './assets/button_restart.png',{frameWidth: 234, frameHeight : 100});
    }

    create(){
        this.startButton = this.relatedScene.add.sprite(600,300, 'buttonRestart').setInteractive();

        this.startButton.on('pointerover', () =>{
            this.startButton.setFrame(1);
        })

        this.startButton.on('pointerout', () =>{
            this.startButton.setFrame(0);
        })

        this.startButton.on('pointerdown', () =>{
            this.startButton.setFrame(0);
            this.relatedScene.scene.start('menuScene');
        })
    }
}   