class Game {
    constructor(ball, size) {
        this.ball = ball;
        this.size = size;
    }
    
    loop(timestamp, mousePos, ctx) {
        this.update(timestamp, mousePos);
        this.draw(ctx);
    }
    
    draw(ctx) {
        ctx.clearRect(0, 0, this.size.x, this.size.y);
        this.ball.draw(ctx);
    }
    
    update(timestamp, pos) {
        if (this.ball.pos.x < 0) {
            this.ball.pos.x = 0;
            this.ball.applyForce(new Vector2D(-this.ball.vel.x, 0));
            this.ball.applyForce(new Vector2D(-this.ball.vel.x * .75, 0));
        } else if (this.ball.pos.x > this.size.x) {
            this.ball.pos.x = this.size.x;
            this.ball.applyForce(new Vector2D(-this.ball.vel.x, 0));
            this.ball.applyForce(new Vector2D(-this.ball.vel.x * .75, 0));
        }

        if (this.ball.pos.y < 0) {
            this.ball.pos.y = 0;
            this.ball.applyForce(new Vector2D(0, -this.ball.vel.y));
            this.ball.applyForce(new Vector2D(0, -this.ball.vel.y * .75));
        } else if (this.ball.pos.y > this.size.y) {
            this.ball.pos.y = this.size.y;
            this.ball.applyForce(new Vector2D(0, -this.ball.vel.y));
            this.ball.applyForce(new Vector2D(0, -this.ball.vel.y * .75));
        }
            this.ball.update(timestamp, pos);
    }
}