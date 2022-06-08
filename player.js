"use strict";
class Actor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update() {
        let position = 0;
    }
}
class Player extends Actor {
    constructor(x, y) {
        super(x, y);
        this.xVel = 0;
        this.yVel = 0;
    }
    moveLeft() {
        this.xVel = -5;
    }
    moveRight() {
        this.xVel = 5;
    }
    moveUp() {
        this.yVel = -5;
    }
    moveDown() {
        this.yVel = 5;
    }
    update() {
        this.x += this.xVel;
        this.y += this.yVel;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.closePath();
<<<<<<< HEAD
        ctx.fillStyle = 'rgba(5, 5, 5, 1)';
=======
>>>>>>> 7714010fbe4843c75dad89d15dafe042072e108e
        ctx.fill();
        ctx.fillStyle = 'rgba (255, 0, 0, 1)';
        // ctx.rect(10, 10, 50, 50)
        // ctx.fill();
    }
}
