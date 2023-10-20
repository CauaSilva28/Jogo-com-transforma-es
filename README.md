# Cena com transformações
Feito por Cauã Silva e Gabriel Faria

# Translate
<p>O translate() é um método que adiciona movimento a um objeto em suas unidades x (horizontalmente) e y (verticalmente) para move-lo em sua tela.</p>
<p>Criamos uma classe chamada "Nave", e nela adicionamos o translate para move-la no eixo X e Y automaticamente.</p>
<img src='img/translateimg.jpg' />
<p>No método desenhar, está tudo que foi utilizado para formar a nave, e no mover, está os códigos responsáveis por alterar o valor de x e y adicionados no translate, junto com condições para que a nave não atravesse os limites da tela do canvas no eixo x e y. A nave para se a tecla de espaço for clicada, e volta a andar se for clicada novamente.</p>
<p>O resultado será mostrado junto com o Rotate().</p>

# Rotate
<p>O rotate() é um método que faz com que o objeto gire em torno do seu proprio eixo, em nossa cena o objeto se move automaticamente e é guiado atravez do rotate para mudar sua trajetoria, com a tecla "A" rodando a nave no sentido anti-horário, e a tecla "D" rodando a nave no sentido horário.</p>
<img src='img/rotateimg.jpg' />

## Resultado do Rotate com o Translate

# Scale 
<p>O scale() é um método que modifica a escala de um objeto desejado multiplicando seu valor inicial pelo número adicionado dentro do código "ctx.scale(n1,n2)", sendo o primeiro número(n1) o valor que vai multiplicar a escala no eixo x (horizontalmente) e o segundo número(n2) o valor que vai multiplicar a escala no eixo y(verticalmente). </p>
<img src='img/scaleimg.jpg' />
<p>Foram adicionadas as mesmas variaveis no eixo x e y do "scale()" para que a nave cresça e diminuá proporcionalmente. Ao clicar na tecla "Q", a nave irá diminuir até certo tamanho, e ao clicar na tecla "E", a nave irá aumentar até certo tamanho.</p>

## Resultado do Scale

# Transform
<p>O transform() utiliza matriz para transformar um objeto. Na matriz pode-se alterar a posição (x, y) como um translate(), a inclinação vertical e horizontal e o seu tamanho como o scale().</p>

# ClipPath
<p>O ClipPath() cria uma máscara de corte(no formato que você criar) por cima de outra forma. Segue o exemplo: </p>