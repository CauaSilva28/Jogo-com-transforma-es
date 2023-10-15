class Rocha{
    constructor(ctx, x, y, s, ix, iy){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.s = s;
        this.ix = ix;
        this.iy = iy;
    }

    desenhar(){
        this.ctx.transform(this.s, this.iy, this.ix, this.s, this.x, this.y);
        this.ctx.beginPath();
        this.ctx.fillStyle = '#ffb600';
        this.ctx.fillRect(0,0,15,15);

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    aleatorio(){
        this.x = Math.floor(Math.random() * 600+80);
        this.y = Math.floor(Math.random() * 600+80);
        this.s = Math.random() * 2+1;
        this.ix = Math.random();
        this.iy = Math.random();
    }
}