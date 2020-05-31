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

    limit(a) {
        if(this.x > a) {
            this.x = a;
        }
        if(this.y > a) {
            this.y = a;
        }
    }

    random2D(min, max) {
        this.x = Math.ceil(Math.random() * (max - min) + min);
        this.y = Math.ceil(Math.random() * (max - min) + min);
        
        return this;
    }

    copy() {
        return new Vector2D(this.x, this.y);
    }
}