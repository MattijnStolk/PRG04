"use strict";
var Chicken = (function () {
    function Chicken(x, y, tree) {
        var _this = this;
        this.div = document.createElement("bird");
        tree.div.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.div.addEventListener("click", function () {
            if (_this.gun) {
                _this.gun.fire();
            }
            else {
                _this.gun = new Gun(_this);
            }
        });
    }
    return Chicken;
}());
var Tree = (function () {
    function Tree(x, y) {
        this.chickens = [];
        this.div = document.createElement("tree");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;
        this.chickenX = this.x + 10;
        for (var i = 0; i < 4; i++) {
            this.chickens.push(new Chicken(this.chickenX, -70, this));
            this.chickenX += this.width / 4;
        }
    }
    Tree.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -450;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Tree;
}());
var Game = (function () {
    function Game() {
        this.trees = [];
        this.bullets = [];
        this.trees.push(new Tree(0, 100));
        this.trees.push(new Tree(0, 300));
        this.gameLoop();
    }
    Game.prototype.addBullet = function (bullet) {
        this.bullets.push(bullet);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.trees; _i < _a.length; _i++) {
            var tree = _a[_i];
            tree.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Bullet = (function () {
    function Bullet(x, y) {
        this.width = 22;
        this.height = 22;
        this.div = document.createElement("bullet");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -1;
        this.yspeed = 1;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bullet;
}());
var Gun = (function () {
    function Gun(chicken) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.fire();
    }
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);
        var bullet = new Bullet(rect.left, rect.right);
        this.game.addBullet(bullet);
    };
    return Gun;
}());
//# sourceMappingURL=main.js.map