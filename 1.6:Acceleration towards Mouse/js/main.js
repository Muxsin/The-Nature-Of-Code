let C_BALLS = 1;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.getBoundingClientRect().width;
let height = canvas.getBoundingClientRect().height;

let balls = new Ball(
    new Vector2D(width/2, height/2),
    15,
    new Vector2D(2, 2),
    new Vector2D(0, 0)
);

let mousePos = new Vector2D(width/2, height/2);

let game = new Game(balls, new Vector2D(width, height));

function loop() {
    game.loop(mousePos, ctx);

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

canvas.onmousemove = (e) => {
    mousePos.reset(e.clientX, e.clientY);
}

