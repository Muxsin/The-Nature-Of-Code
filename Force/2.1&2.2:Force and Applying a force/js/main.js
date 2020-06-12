let C_BALLS = 1;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.getBoundingClientRect().width;
let height = canvas.getBoundingClientRect().height;

let ball = new Player(
    new Vector2D( width/2, 50),
    new Vector2D(0, 6),
    new Vector2D(0, 0)
);

let mousePos = new Vector2D(width/2, height/2);
let mouseState = false;

let game = new Game(ball, new Vector2D(width, height));

function loop(timestamp) {
    game.loop(timestamp, mousePos, ctx);

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
