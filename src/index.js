const config = {
    type: Phaser.AUTO,
    parent: 'game-pong',
    with:800,
    height:600,
    scale:{
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:{
        default: 'arcade',
        arcade:{
            gravity:false
        }
    }
};


const game = new Phaser.Game(config);
