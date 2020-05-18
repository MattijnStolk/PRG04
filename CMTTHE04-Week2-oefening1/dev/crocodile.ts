class Crocodile{

    div: HTMLElement

    constructor(){
        this.createCrocodile()
    }

    createCrocodile(){
        let crocodile = document.createElement("crocodile")
        gameElement.appendChild(crocodile)

        let x = `${randomPosition()}vw`
        let y = `${randomPosition()}vh`
        crocodile.style.transform = `translate(${x}, ${y})`;

        crocodile.addEventListener("click", () => {
            crocodile.remove()
        })
    }
}