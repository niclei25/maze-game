"use strict";
class Actor {
    constructor(x, y) {
        this.y = 0;
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
        if (this.x <= 500 && this.x >= 400 && this.y === 0) {
            this.stop();
            window.alert("You finished the Maze! Now you can go back to the home screen :)");
            stopwatch.halt();
            pauseDrawing();
        }
        if (this.x >= canvas.width) {
            this.xVel = -this.xVel;
        }
        if (this.y >= canvas.height) {
            this.yVel = -this.yVel;
        }
        this.preventcrossing();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = 'rgba (255, 0, 0, 1)';
        // ctx.rect(10, 10, 50, 50)
        // ctx.fill();
    }
    preventcrossing() {
        let pos = m.checkForWall(Math.floor(this.x / (500 / m.width)), Math.floor(this.y / (500 / m.length)));
        if (pos === true) {
            this.y -= this.yVel;
            this.x -= this.xVel;
        }
    }
    stop() {
        this.xVel = 0;
        this.yVel = 0;
    }
}
