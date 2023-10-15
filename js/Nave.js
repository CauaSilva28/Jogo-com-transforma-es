class Nave{
    constructor(ctx, x, y, r, s, turbo){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = r;
        this.s = s;
        this.turbo = turbo;
    }

    desenhar(){
        this.ctx.translate(this.x,this.y);
        this.ctx.rotate(this.r);
        this.ctx.scale(this.s, this.s);

        // parte principal
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(0,20);
        this.ctx.lineTo(50,20);
        this.ctx.lineTo(80,35);
        this.ctx.lineTo(50,45);
        this.ctx.lineTo(0,45);
        this.ctx.lineTo(0,20);
        this.ctx.fillStyle = '#a1a1a1';
        this.ctx.fill();
        this.ctx.stroke();

        //ponta da nave
        this.ctx.beginPath();
        this.ctx.moveTo(70,30);
        this.ctx.lineTo(70,38);
        this.ctx.lineTo(80,35);
        this.ctx.lineTo(70,30);
        this.ctx.fillStyle = '#ff0000';
        this.ctx.fill();
        this.ctx.stroke();

        //janela
        this.ctx.beginPath();
        this.ctx.arc(40,32,6,0,Math.PI*2);
        this.ctx.fillStyle = '#2b78fc';
        this.ctx.fill();
        this.ctx.stroke();

        //asas
        this.ctx.beginPath();
        this.ctx.moveTo(25,19);
        this.ctx.quadraticCurveTo(20,10,0,5);
        this.ctx.quadraticCurveTo(15,15,15,20);
        this.ctx.fillStyle = '#ff0000';
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(25,45);
        this.ctx.quadraticCurveTo(20,54,0,59);
        this.ctx.quadraticCurveTo(15,45,15,45);
        this.ctx.fillStyle = '#ff0000';
        this.ctx.fill();
        this.ctx.stroke();

        //turbo
        this.ctx.fillStyle = '#e64500';
        this.ctx.fillRect(0,27,this.turbo,10);

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    mover(velox, veloy, tamanhoTurbo){
        this.x += velox * Math.cos(this.r);
        this.y += veloy * Math.sin(this.r);

        this.turbo = -tamanhoTurbo;

        if(this.x >= 720){
            this.x = 720;
        }
        if(this.x <= 80){
            this.x = 80;
        }

        if(this.y >= 720){
            this.y = 720;
        }
        if(this.y <= 80){
            this.y = 80;
        }
    }

    rotacionar(velor){
        this.r += velor;

        if(this.r >= 6.3 || this.r <= -6.3){
            velor = 0;
        }
    }

    alterarTamanho(tamanho){
        this.s += tamanho;

        if(this.s >= 1.5){
            this.s = 1.5;
        }
        if(this.s <= 0.5){
            this.s = 0.5;
        }
    }
}