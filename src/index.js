import {MenuScene} from './menuScene.js';
import {Game} from './Game.js';

const config = {
    type: Phaser.AUTO,
    parent: 'game-pong',
    with:800,
    height:600,
    scene: [MenuScene, Game], 
    physics:{
        default: 'arcade',
        arcade:{
            gravity:false
        }
    }
};

var game = new Phaser.Game(config);
