class Game {
    constructor(player, size) {
        this.player = player;
        this.size = size;
    }

    loop(ctx) {
        this.update();
        this.draw(ctx);
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.size.x, this.size.y)
        this.player.draw(ctx);
    }

    update() {
        this.player.update();
    }
}