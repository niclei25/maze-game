let player : Player = new Player(canvas.width / 2, canvas.height - 20);


document.addEventListener("keydown", function(event: KeyboardEvent){
    if (event.key === "ArrowLeft")
        player.moveLeft();
    if (event.key === "ArrowRight")
        player.moveRight();
        
});