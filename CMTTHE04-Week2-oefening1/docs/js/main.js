"use strict";
var Bubble = (function () {
    function Bubble() {
        console.log("Blub... blub...");
        this.createBubble();
    }
    Bubble.prototype.createBubble = function () {
        var _this = this;
        var bubble = document.createElement("bubble");
        gameElement.appendChild(bubble);
        var x = randomPosition() + "vw";
        var y = randomPosition() + "vh";
        bubble.style.transform = "translate(" + x + ", " + y + ")";
        bubble.addEventListener("click", function () {
            bubble.remove();
            _this.popBubble();
        });
    };
    Bubble.prototype.popBubble = function () {
        console.log("Plop!");
        gameElement.remove;
    };
    return Bubble;
}());
var Crocodile = (function () {
    function Crocodile() {
        this.createCrocodile();
    }
    Crocodile.prototype.createCrocodile = function () {
        var crocodile = document.createElement("crocodile");
        gameElement.appendChild(crocodile);
        var x = randomPosition() + "vw";
        var y = randomPosition() + "vh";
        crocodile.style.transform = "translate(" + x + ", " + y + ")";
        crocodile.addEventListener("click", function () {
            crocodile.remove();
        });
    };
    return Crocodile;
}());
var Fish = (function () {
    function Fish() {
        this.createFish();
    }
    Fish.prototype.createFish = function () {
        var _this = this;
        var fish = document.createElement("fish");
        gameElement.appendChild(fish);
        var x = randomPosition() + "vw";
        var y = randomPosition() + "vh";
        fish.style.transform = "translate(" + x + ", " + y + ")";
        var randomHue = Math.random() * (360 - 1) + 1;
        fish.style.filter = "hue-rotate(" + randomHue + "deg)";
        console.log("Fish was created!");
        fish.addEventListener("click", function () {
            fish.classList.add("dead");
            _this.killFish();
        });
    };
    Fish.prototype.killFish = function () {
        console.log("Aargh!");
    };
    return Fish;
}());
var gameElement = document.getElementsByTagName("game")[0];
function randomPosition() {
    return Math.floor(Math.random() * 100);
}
var Game = (function () {
    function Game() {
        for (var i = 0; i < 10; i++) {
            new Crocodile();
            new Fish();
            new Bubble();
            console.log("Game was created!");
        }
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map