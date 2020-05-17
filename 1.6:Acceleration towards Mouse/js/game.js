class Game {
    constructor(player, mouse, size) {
        this.player = player;
        this.mouse = mouse;
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
        let location = this.size.copy();
        location.div(2);
        this.mouse.sub(location);
        this.mouse.setMag(0.5);
        
        this.player.acc.reset(this.mouse.x, this.mouse.y);
        this.player.vel.add(this.player.acc);
        this.player.vel.limit(5);
        this.player.pos.add(this.player.vel);

        this.player.pos.x += 512;
        this.player.pos.x %= 512;
        this.player.pos.y += 512;
        this.player.pos.y %= 512;
    }
}