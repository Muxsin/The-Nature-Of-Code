class Game {
    constructor(balls, size) {
        this.balls = balls;
        this.size = size;
    }

    loop(mousePos, ctx) {
        this.update(mousePos);
        this.draw(ctx);
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.size.x, this.size.y)
        this.balls.draw(ctx);
    }

    update(pos) {
        this.balls.update(pos);
    }
}