let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.getBoundingClientRect().width;
let height = canvas.getBoundingClientRect().height;

let player = new Player(
    new Vector2D(200, 200), 
    20, 
    new Vector2D(0, 2),
    new Vector2D(2, 1)
);

let game = new Game(
    new Vector2D(width, height), 
    player
);

function loop() {
    game.loop(ctx);

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);