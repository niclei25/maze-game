// Main "boilerplate" code for a game loop. Unlikely to need to change this.

const FRAME_LENGTH = 30
const actorList = new ActorList();

//Draw ~ 30 times a second
let drawIntervalId : number | undefined = window.setInterval(draw, FRAME_LENGTH);

function draw(){
    // Clear the stage!
    ctx.clearRect(0,0,canvas.width, canvas.height);

    // Re-draw all the actors!
    for (const actor of actorList.actors){
        actor.draw();
    }

    //Update all actors
    for (const actor of actorList.actors){
        actor.update();
    }
}

// Functions to control (pause/continue) the game loop.

function pauseDrawing(){
    if (drawIntervalId !== undefined)
        clearInterval(drawIntervalId);
    drawIntervalId = undefined;
}

function continueDrawing(){
    if (drawIntervalId === undefined)
        drawIntervalId = window.setInterval(draw, FRAME_LENGTH);
}

(document.querySelector("#pause") as HTMLElement).addEventListener("click",pauseDrawing);
(document.querySelector("#continue") as HTMLElement).addEventListener("click",continueDrawing);