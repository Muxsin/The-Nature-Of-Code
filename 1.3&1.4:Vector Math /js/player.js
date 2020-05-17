class Player {
    constructor(pos) {
        this.pos = pos
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(this.pos.x, this.pos.y);
        ctx.stroke();
        ctx.closePath();
    }
}