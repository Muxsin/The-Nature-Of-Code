class Player {
    constructor(pos = new Vector2D(0, 0), vel = new Vector2D(0, 0), acc = new Vector2D(0, 0)) {
        this.pos = pos;
        this.vel = vel;
        this.acc = acc;
    }
        
    applyForce(force) {
        this.acc.add(force);
    }
        
    update(timestamp) {
        this.applyForce(new Vector2D(0, 0.098));
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.reset(0, 0);
    }
        
    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "rgba(22, 22, 22, 0.5)";
        ctx.arc(this.pos.x,
                this.pos.y,
                16,
                0,
                2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
}