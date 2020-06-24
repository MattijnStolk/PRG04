/// <reference path="tree.ts"/>

class Game {
    
    private trees:Tree[] = []
    private bullets:Bullet[] = []

    public addBullet(bullet : Bullet){
        this.bullets.push(bullet)
    }
 
    constructor() {
        // de game heeft trees nodig
        this.trees.push(new Tree(0, 100))
        this.trees.push(new Tree(0, 300))
        
        
        // start de game loop
        this.gameLoop()
    }
    
    private gameLoop(){
        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen
        for (const tree of this.trees) {
            tree.move()
        }
              
        // animation
        requestAnimationFrame(() => this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())