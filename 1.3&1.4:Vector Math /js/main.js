let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.getBoundingClientRect().width;
let height = canvas.getBoundingClientRect().height;


ctx.translate(width/2, height/2);

let player = new Player(new Vector2D(0, 0));

let game = new Game(player, new Vector2D(width/2, height/2));

function loop() {

    game.loop(ctx);

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

canvas.onmousemove = (e) => {
    game.points(e.clientX, e.clientY);
}
