let gameElement = document.getElementsByTagName("game")[0]


function randomPosition(){
    return Math.floor(Math.random() * 100)
}



class Game {
        
    constructor() {
        new Fish()
        new Bubble()
        console.log("Game was created!")
    }
} 

window.addEventListener("load", () => new Game())