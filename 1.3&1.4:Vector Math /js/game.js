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
        ctx.clearRect(-256, -256, 512, 512);
        ctx.beginPath();
        ctx.arc(0, 0, 3,0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
        this.player.draw(ctx);
        //ctx.fillRect(0, 0, this.player.pos.mag(), 20);
    }

    points(x, y) {
        this.player.pos.reset(x, y);
        this.player.pos.sub(this.size);
        this.player.pos.sub(new Vector2D(9,9));
        
        //this.player.pos.mul(5);
        //this.player.pos.mul(0.2);
        //this.player.pos.norm();
        //this.player.pos.setMag(50);
    }

    update() {
        //Nothing
    }
    
}