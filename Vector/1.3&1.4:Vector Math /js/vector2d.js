class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    reset(x, y) {
        this.x = x;
        this.y = y;

        return this;
    }

    mag() {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }

    add(v){
        this.x += v.x;
        this.y += v.y;

        return this;
    }

    sub(v){
        this.x -= v.x;
        this.y -= v.y;

        return this;
    }

    mul(n){
        this.x *= n;
        this.y *= n;

        return this;
    }

    div(n){
        this.x /= n;
        this.y /= n;

        return this;
    }

    norm() {
        let mag = this.mag();
        this.x /= mag;
        this.y /= mag;

        return this;
    }

    setMag(d) {
        let norm = this.norm();
        this.mul(d);

        return this;

    }

    copy() {
        return new Vector2D(this.x, this.y);
    }
}