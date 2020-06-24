/// <reference path="ball.ts"/>

class Game {
    
    private balls : Ball[] = []
    private paddle : Paddle
    private score : number = 0
    
    constructor() {

        for (let i = 0; i < 20; i++) {
            this.balls.push(new Ball())
            
        }
        this.paddle = new Paddle()

        this.gameLoop()
    }
    
    private gameLoop(){
        for (const ball of this.balls) {
            ball.update()

            this.checkBallBounce(ball)
             if (this.checkCollision(ball.getRectangle(), this.paddle.getRectangle())){
                 console.log("botsing met paddle")
                 ball.bounceX()
                 this.addPoint()
             }
        }
        this.paddle.update()



        requestAnimationFrame(()=>this.gameLoop())
    }

    private checkBallBounce(ball : Ball){
        //Right
        if(ball.x + ball.div.clientWidth > window.innerWidth){
            ball.bounceX()
        //Top
        }else if (ball.y < 0) {
            ball.bounceY()
        //Bottom
        }else if (ball.y + ball.div.clientHeight > window.innerHeight) {
            ball.bounceY()
        }
    }
    private checkCollision(a: ClientRect, b: ClientRect){
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= a.bottom &&
            b.top <= a.bottom)
    }
    private addPoint(){
        let score = document.getElementsByTagName("score")[0]
        this.score++
        score.innerHTML = "Score : "+ this.score
    }
} 

window.addEventListener("load", () => new Game())