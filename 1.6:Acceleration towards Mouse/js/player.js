class Player {
    constructor(pos, radius, size, vel, acc) {
        this.pos = pos;
        this.r = radius;
        this.size = size;
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
                this.size.x, 
                this.size.y * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

    update() {
        //nothing

    }
}