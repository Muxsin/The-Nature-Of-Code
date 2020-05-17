class Player {
    constructor(pos, r, angle, vel) {
        this.pos = pos;
        this.r = r;
        this.angle = angle;
        this.vel = vel;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.save();
        ctx.fillStyle = "rgba(22, 22, 22, 0.6";
        ctx.arc(
            this.pos.x, 
            this.pos.y, 
            this.r, 
            this.angle.x, 
            Math.PI * this.angle.y);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
    }

    update() {
        this.pos.add(this.vel);
    }
}