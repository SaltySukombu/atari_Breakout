let ball;
let paddle;

function setup(){
    createCanvas(600,600); //Cria um canvas de 600 por 600

    ball = {
        x: width / 2,
        y: height / 2,
        r: 10,
        vx: 0,
        vy: 0,
    }

    paddle = {
        x: width / 2,
        y: height -20,
        w: 100,
        h: 10,
    }
}

function draw(){
    background(0); //coloca a cor de fundo

    ellipseMode(RADIUS); //Define com as coordenadas, como vai ser feito o desenho. Se for um circulo so um raio parametros do ellipseMode(corner,corners,radius,center).
    fill("white"); //Define a cor
    ellipse(ball.x, ball.y, ball.r); //Desenha a bola

    rectMode(CENTER); //Define o retangulo usando a altura e largura
    fill("yellow");
    rect(paddle.x, paddle.y, paddle.w, paddle.h); //Desenha um retengulo
}