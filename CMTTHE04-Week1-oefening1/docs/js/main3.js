let game = document.getElementsByTagName("game")[0]


for (let i = 0; i < 100; i++) {
    createFish()
    createBubble()
}


function createFish(){
    let fish = document.createElement("fish")
    fish.addEventListener("click", onFishClick)

    game.appendChild(fish)
        
    let x = Math.random() * (window.innerWidth - fish.clientWidth)
    let y = Math.random() * (window.innerHeight - fish.clientHeight)
    let color = Math.random() * (360 - 1) + 1;

    fish.style.transform = `translate(${x}px, ${y}px)`
    fish.style.filter = `hue-rotate(${color}deg)`

}

function createBubble(){
    let bubble = document.createElement("bubble")
    game.appendChild(bubble)
    bubble.addEventListener("click", onBubbleClick)

    let x = Math.random() * (window.innerWidth - bubble.clientWidth)
    let y = (window.innerHeight - bubble.clientHeight)

    bubble.style.transform = `translate(${x}px, ${y}px)`
}

function onFishClick(event){
    event.target.classList.add("dead")
}

function onBubbleClick(event){
    event.target.remove()
}