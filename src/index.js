const config = {
    type: Phaser.AUTO,
    parent: 'game-pong',
    with:800,
    height:600,
    scene:{
       preload,
       create,
       update 
    },
    physics:{
        default: 'arcade',
        arcade:{
            gravity:false
        }
    }
};


const game = new Phaser.Game(config);
const paddleVelocity = 350;
let ball;
let player1;
let player2;
let isGameStart = false;
let cursors;
let cursors2={};
let textPoints1;
let textPoints2;
let points1=0;
let points2=0;
let textVictory;
let pointsVictory=2;


function preload(){
    this.load.image('ball', '../assets/ball.png');
    this.load.image('paddle', '../assets/paddle.png');
}

function create(){
    ball = this.physics.add.sprite(
        this.physics.world.bounds.width/2,
        this.physics.world.bounds.height/2,
        'ball'
    );
    ball.setCollideWorldBounds(true);
    ball.setBounce(1,1);

    player1 = this.physics.add.sprite(
        this.physics.world.bounds.width- (ball.body.width/2+1),
        this.physics.world.bounds.height/2,
        'paddle'
    );
    player1.setImmovable(true);
    player1.setCollideWorldBounds(true);

    player2 = this.physics.add.sprite(
        ball.body.width/2+1,
        this.physics.world.bounds.height/2,
        'paddle'
    );
    player2.setImmovable(true);
    player2.setCollideWorldBounds(true);

    cursors= this.input.keyboard.createCursorKeys();
    cursors2.w=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    cursors2.s=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)

    this.physics.add.collider(ball,player1);
    this.physics.add.collider(ball,player2);

    textPoints1=this.add.text(
        this.physics.world.bounds.width/2 -100,
        this.physics.world.bounds.height/2-200,
        points1,
        {
            font:"48px Verdana",
            fill: "#fff",
            aling:"center"
        },
    );

    textPoints2=this.add.text(
        this.physics.world.bounds.width/2+100,
        this.physics.world.bounds.height/2-200,
        points2,
        {
            font:"48px Verdana",
            fill: "#fff",
            align:"center"
        }
    );

    textVictory=this.add.text(
        this.physics.world.bounds.width/2,
        this.physics.world.bounds.height/2,
        '-',
        {
            font:"48px Verdana",
            fill: "#fff",
            align:"center"
        }
    );
    textVictory.setVisible(false);
}

function update(){
    if(!isGameStart){
        const initialVelocityInX= (Math.random()*300)+300;
        const initialVelocityInY=(Math.random()*300)+300;
    
        ball.setVelocityX(initialVelocityInX);
        ball.setVelocityY(initialVelocityInY);
        isGameStart=true;
    }

    if(ball.body.x > player1.body.x-9.3){
        points1+=1;
        textPoints1.text=points1;
        //console.log(points1);

        if(points1==pointsVictory){
            ball.setVelocityX(0);
            ball.setVelocityY(0);
            ball.body.x=100;
            textVictory.text='Player 1 WON';
            textVictory.setVisible(true);
        }
    }

    if(ball.body.x+10.5 < player2.body.x){
        points2+=1;
        textPoints2.text=points2;
        console.log(points2);

        if(points2==pointsVictory){
            ball.setVelocityX(0);
            ball.setVelocityY(0);
            ball.body.x=100;
            textVictory.text='Player 2 WON';
            textVictory.setVisible(true);
        }

    }

    player1.body.setVelocityY(0);
    player2.body.setVelocityY(0);

    if(cursors.up.isDown){
        player1.body.setVelocityY(-paddleVelocity);
    }

    if(cursors.down.isDown){
        player1.body.setVelocityY(paddleVelocity);
    }

    if(cursors2.w.isDown){
        player2.body.setVelocityY(-paddleVelocity);
    }

    if(cursors2.s.isDown){
        player2.body.setVelocityY(paddleVelocity);
    }


    if(ball.body.velocity.y > paddleVelocity){
        ball.body.setVelocityY(paddleVelocity);
    }

    if(ball.body.velocity.y < -paddleVelocity){
        ball.body.setVelocityY(-paddleVelocity);
    }
}
