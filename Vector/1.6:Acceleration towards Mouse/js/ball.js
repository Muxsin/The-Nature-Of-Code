class Ball {
    constructor(pos, radius, vel = new Vector2D(0,0), acc  = new Vector2D(0,0)) {
        this.pos = pos;
        this.r = radius;
        this.vel = vel;
        this.acc = acc;
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "rgba(22, 22, 22, 0.5)";
        ctx.arc(this.pos.x, 
                this.pos.y, 
                this.r, 
                0, 
                2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

    update(mousePos) {
        let force = this.pos.copy().sub(mousePos).mul(-1);
        this.acc.add(force);
        this.acc.limit(1);

        this.vel.add(this.acc);
        this.vel.limit(15);
        this.pos.add(this.vel);
        this.acc.reset(0,0);
    }
}