const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var parado = false;
var rochasPegas = 0;

const textPegas = `Você coletou ${rochasPegas} rochas`;

//Cor gradiante para fundo
const gradiente = ctx.createLinearGradient(0, 0, 1, 1000);
gradiente.addColorStop(0.1, '#020024');
gradiente.addColorStop(0.5, '#491b8e');
gradiente.addColorStop(0.8, '#765ebf');
gradiente.addColorStop(1, '#b57bff');

//Chamando classes
const nave = new Nave(ctx,100,100,0,1,0);
const rocha = new Rocha(ctx,0,0,1,0,0);

rocha.aleatorio();

function animar(){    
    ctx.clearRect(0,0,800,800);

    //Utilizando ctx.clip
    ctx.save();
    var posicaoClipx = nave.x + 20;
    var posicaoClipy = nave.y + 20;

    ctx.beginPath();
    ctx.arc(posicaoClipx,posicaoClipy,200,0,Math.PI*2);
    ctx.stroke();

    ctx.clip();
    ctx.fillStyle = gradiente;
    ctx.fillRect(0,0,800,800);
    nave.desenhar();
    rocha.desenhar();

    ctx.restore();

    //Fazendo a nave andar se ela não estiver parada
    if(parado == false){
        nave.mover(2,2,20);
    }

    // Verificação de colisão entre a nave e a rocha
    if(nave.x >= rocha.x - 80 && nave.x <= rocha.x + 80 &&
        nave.y >= rocha.y - 80 && nave.y <= rocha.y + 80){
        rocha.aleatorio();
        rochasPegas++;
    }

    requestAnimationFrame(animar);
}

document.addEventListener('keydown', function(event){
    //Parar a nave
    if(event.key === ' '){
        nave.mover(0,0,0);
        if(parado){
            parado = false;
        }
        else{
            parado = true;
        }
    }

    //Rotacionar nave
    if(event.key === 'a' || event.key === 'A'){
        nave.rotacionar(-0.1);
    }

    if(event.key === 'd' || event.key === 'D'){
        nave.rotacionar(0.1);
    }

    //Aumentar tamanho da nave
    if(event.key === 'e' || event.key === 'E'){
        nave.alterarTamanho(0.1);
    }
    if(event.key === 'q' || event.key === 'Q'){
        nave.alterarTamanho(-0.1);
    }
});

animar();

