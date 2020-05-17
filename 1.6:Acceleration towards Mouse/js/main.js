let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.getBoundingClientRect().width;
let height = canvas.getBoundingClientRect().height;

let player = new Player(
    new Vector2D(100, 100), 
    20, 
    new Vector2D(0 , 2), 
    new Vector2D(0, 0), 
    new Vector2D(0, 0)
);

let game = new Game(player,new Vector2D(width/2, height/2) , new Vector2D(width, height));

function loop() {
    game.loop(ctx);
    
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

canvas.onmousemove = (e) => {
    game.mouse.reset(e.clientX, e.clientY);
}