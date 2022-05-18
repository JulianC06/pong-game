export class Game extends Phaser.Scene {

    constructor(){
        super({key: 'gameScene'}); 
    }

    init() {
        this.ball;
        this.player1;
        this.player2;
        this.isGameStart = false;
        this.cursors;
        this.cursors2={};
        this.textPoints1;
        this.textPoints2;
        this.points1=0;
        this.points2=0;
        this.textVictory;
        this.pointsVictory=2;
    }

    preload(){
      
        this.load.image('ball', '../assets/ball.png');
        this.load.image('paddle', '../assets/paddle.png');
       
        
    }

    create(){
        //Create ball
        this.ball = this.physics.add.sprite(
            this.physics.world.bounds.width/2,
            this.physics.world.bounds.height/2,
            'ball'
        );
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1,1);

        //create player 1
        this.player1 = this.physics.add.sprite(
            this.physics.world.bounds.width- (this.ball.body.width/2+1),
            this.physics.world.bounds.height/2,
            'paddle'
        );
        this.player1.setImmovable(true);
        this.player1.setCollideWorldBounds(true);

        //create player 2
        this.player2 = this.physics.add.sprite(
            this.ball.body.width/2+1,
            this.physics.world.bounds.height/2,
            'paddle'
        );
        this.player2.setImmovable(true);
        this.player2.setCollideWorldBounds(true);

        this.cursors= this.input.keyboard.createCursorKeys();
        this.cursors2.w=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursors2.s=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        this.physics.add.collider(this.ball, this.player1);
        this.physics.add.collider(this.ball,this.player2);

        this.textPoints1=this.add.text(
            this.physics.world.bounds.width/2 -100,
            this.physics.world.bounds.height/2-200,
            this.points1,
            {
                font:"48px Verdana",
                fill: "#fff",
                aling:"center"
            },
        );

        this.textPoints2=this.add.text(
            this.physics.world.bounds.width/2+100,
            this.physics.world.bounds.height/2-200,
            this.points2,
            {
                font:"48px Verdana",
                fill: "#fff",
                align:"center"
            }
        );

        this.textVictory=this.add.text(
            this.physics.world.bounds.width/2,
            this.physics.world.bounds.height/2,
            '-',
            {
                font:"48px Verdana",
                fill: "#fff",
                align:"center"
            }
        );
        this.textVictory.setVisible(false);
    }



    update(){
        const paddleVelocity = 350;
        if(!this.isGameStart){
            const initialVelocityInX= (Math.random()*300)+300;
            const initialVelocityInY=(Math.random()*300)+300;
        
            this.ball.setVelocityX(initialVelocityInX);
            this.ball.setVelocityY(initialVelocityInY);
            this.isGameStart=true;
        }

        if(this.ball.body.x > (this.player1.body.x-9.3)){
            this.points1 += 1;
            this.textPoints1.text = this.points1;
           //}
           console.log(this.points1);

            if(this.points1 == this.pointsVictory){
                this.ball.setVelocityX(0);
                this.ball.setVelocityY(0);
                this.ball.body.x=100;
                this.textVictory.text='Player 1';
                this.textVictory.setVisible(true);
                this.showGameOver(this.textVictory);
            }
        }

       if((this.ball.body.x+10.5) < this.player2.body.x){
            this.points2+=1;
            this.textPoints2.text = this.points2;
           console.log(this.points2);

            if(this.points2 == this.pointsVictory){
                this.ball.setVelocityX(0);
                this.ball.setVelocityY(0);
                this.ball.body.x=100;
                this.textVictory.text='Player 2';
                this.textVictory.setVisible(true);
                this.showGameOver(this.textVictory);
            }

        }

        this.player1.body.setVelocityY(0);
        this.player2.body.setVelocityY(0);

       if(this.cursors.up.isDown){
            this.player1.body.setVelocityY(-1*paddleVelocity);
        }

        if(this.cursors.down.isDown){
            this.player1.body.setVelocityY(paddleVelocity);
        }

        if(this.cursors2.w.isDown){
            this.player2.body.setVelocityY(-1*paddleVelocity);
        }

        if(this.cursors2.s.isDown){
            this.player2.body.setVelocityY(paddleVelocity);
        }


        if(this.ball.body.velocity.y > paddleVelocity){
            this.ball.body.setVelocityY(paddleVelocity);
        }

        if(this.ball.body.velocity.y < -paddleVelocity){
            this.ball.body.setVelocityY(-1*paddleVelocity);
        }
    }


    showGameOver(textPlayerWinner){
       // this.events.emit('playerWinner', (winnerName : textPlayerWinner});
        this.scene.start('endGameScene', {winnerName : textPlayerWinner});
    }
}