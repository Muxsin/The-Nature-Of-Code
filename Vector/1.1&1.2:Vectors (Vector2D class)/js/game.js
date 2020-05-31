class Game {
    constructor(size, player) {
        this.size = size;
        this.player = player;
    }

    loop(ctx) {
        this.draw(ctx);
        this.update();
    }

    checkIntersection() {
        if (this.player.pos.x + this.player.r >= this.size.x ||
            this.player.pos.x - this.player.r <= 0) 
        {
            this.player.vel.x *= -1;
        } 
        if (this.player.pos.y + this.player.r >= this.size.y ||
            this.player.pos.y - this.player.r <= 0) 
        {
            this.player.vel.y *= -1;
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.size.x, this.size.y);        
        this.player.draw(ctx);
    }

    update() {
        this.checkIntersection();
        this.player.update();
    }
}