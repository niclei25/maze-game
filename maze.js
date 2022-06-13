<<<<<<< HEAD
console.log("Hi! This is our this.maze... it'll be here soon!");
var Maze = /** @class */ (function () {
    function Maze(length, width) {
=======
"use strict";
console.log("Hi! This is our this.maze... it'll be here soon!");
class Maze {
    constructor(length, width) {
>>>>>>> cbf881d0bcde0b07a7bf1884058120caca0b41c4
        this.length = length;
        this.width = width;
        this.maze = new Array(this.length);
        ;
    }
    createMaze() {
        // creates initial array - first just rows, then makes each of the rows full of columns
        for (let n = 0; n < this.length; n++) {
            this.maze[n] = new Array(this.width);
        }
        // makes the first and last rows walls
        for (let k = 0; k < this.width; k++) {
            this.maze[0][k] = "wall";
            this.maze[this.length - 1][k] = "wall";
        }
        // makes the first and last columns walls
        for (let k = 1; k < this.length - 1; k += 1) {
            this.maze[k][0] = "wall";
            this.maze[k][this.width - 1] = "wall";
        }
        this.maze[0][this.width - 2] = "EXIT";
        this.maze[this.length - 1][1] = "ENTER";
        this.printEverything();
        let toBeWall = true;
        let start = this.randomPoint(toBeWall);
        this.maze[start[0]][start[1]] = "wall";
        this.carvePassagesFrom(0, 0);
        this.printEverything();
    }
    carvePassagesFrom(cx, cy) {
        const N = 2;
        const S = -2;
        const E = 2;
        const W = -2;
        let directions = [N, S, E, W]; // algorithm to sort randomly if time
        for (let d of directions) {
            let nx = cx;
            let ny = cy;
            if (d == E || d == W) {
                nx += d;
            }
            else {
                ny += d;
            }
            if (ny > 0 && ny < this.length - 1 && nx > 0 && nx < this.length && this.maze[nx][ny] !== "wall") {
                this.maze[cy][cx] |= d;
                if (d == N) {
                    this.maze[ny][nx] |= S;
                }
                else if (d == S) {
                    this.maze[ny][nx] |= N;
                }
                else if (d == E) {
                    this.maze[ny][nx] |= W;
                }
                else {
                    this.maze[ny][nx] |= E;
                }
                this.carvePassagesFrom(nx, ny);
            }
        }
    }
    randomPoint(toBeWall) {
        let x = Math.floor(Math.random() * (this.width - 2) + 1);
        let y = Math.floor(Math.random() * (this.length - 2) + 1);
        if (toBeWall) {
            if (x % 2 == 0) {
                x = (x - 2) / 2;
            }
            else {
                x = (x - 1) / 2;
            }
            if (y % 2 == 0) {
                y = (y - 2) / 2;
            }
            else {
                y = (y - 1) / 2;
            }
        }
        return [x, y];
<<<<<<< HEAD
    };
    Maze.prototype.printEverything = function () {
        console.log("after everything:" + this.maze);
        for (var x = 0; x < this.length; x++) {
            console.log("each row after everything:" + this.maze[x]);
        }
    };
    Maze.prototype.drawEverything = function () {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.length; y++) {
=======
    }
    printEverything() {
        console.log("after everything:" + this.maze);
        for (let x = 0; x < this.length; x++) {
            console.log("each row after everything:" + this.maze[x]);
        }
    }
    drawEverything() {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.length; y++) {
>>>>>>> cbf881d0bcde0b07a7bf1884058120caca0b41c4
                if (this.maze[y][x] == "wall") {
                    ctx.drawImage(wallImage, x * canvas.width / m.width, y * canvas.height / m.length, canvas.width / m.width, canvas.height / m.length);
                }
            }
        }
    }
    checkForWall(x, y) {
        if (this.maze[x][y] === 'wall') {
            return true;
        }
    }
}
let givenLength = 5;
let givenWidth = 7;
let m = new Maze(2 * givenLength + 1, 2 * givenWidth + 1);
m.createMaze();
