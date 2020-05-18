"use strict";
var game = document.getElementsByTagName("game")[0];
for (var i = 0; i < 100; i++) {
    createFish();
    createBubble();
}
function createFish() {
    var fish = document.createElement("fish");
    fish.addEventListener("click", onFishClick);
    game.appendChild(fish);
    var x = Math.random() * (window.innerWidth - fish.clientWidth);
    var y = Math.random() * (window.innerHeight - fish.clientHeight);
    var color = Math.random() * (360 - 1) + 1;
    fish.style.transform = "translate(" + x + "px, " + y + "px)";
    fish.style.filter = "hue-rotate(" + color + "deg)";
}
function createBubble() {
    var bubble = document.createElement("bubble");
    game.appendChild(bubble);
    bubble.addEventListener("click", onBubbleClick);
    var x = Math.random() * (window.innerWidth - bubble.clientWidth);
    var y = (window.innerHeight - bubble.clientHeight);
    bubble.style.transform = "translate(" + x + "px, " + y + "px)";
}
function onFishClick(event) {
    event.target.classList.add("dead");
}
function onBubbleClick(event) {
    event.target.remove();
}
//# sourceMappingURL=main.js.map