class Bubble {

    div:HTMLElement

    constructor() {
        console.log("Blub... blub...")

        this.createBubble()
    }

    createBubble(){
        let bubble = document.createElement("bubble")
        gameElement.appendChild(bubble)

        let x = `${randomPosition()}vw`
        let y = `${randomPosition()}vh`
        bubble.style.transform = `translate(${x}, ${y})`;

        bubble.addEventListener("click", () => {
            bubble.remove()
            this.popBubble()
        })
    }

    popBubble() {

        
        console.log("Plop!")

        gameElement.remove
    }
}