let ball;
let paddle;
let bricks = [];
let rows = 4;
let cols = 8;
let brickWidth = 60;
let brickHeight = 20;
let spacing = 5;

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

    createBricks();
}

function draw(){
    background(0); //coloca a cor de fundo

    ball.x += ball.vx;
    ball.y += ball.vy;

    if(ball.x - ball.r < 0 || ball.x + ball.r > width) ball.vx *= -1;
    if(ball.y - ball.r <0) ball.vy *=-1;
    if(ball.y + ball.r > paddle.y - paddle.h / 2 && ball.y + ball.r < paddle.y + paddle.h / 2 && ball.x > paddle.x - paddle.w / 2 && ball.x < paddle.x + paddle.w / 2){
        ball.vy *= -1;
        let diff = ball.x - paddle.x;
        ball.vx = diff * 0.1;
    }

    for (let i = 0; i < bricks.length; i++){
        fill(bricks[i].color);
        rect(bricks[i].x, bricks[i].y, bricks[i].w, bricks[i].h);
    }

    ellipseMode(RADIUS); //Define com as coordenadas, como vai ser feito o desenho. Se for um circulo so um raio parametros do ellipseMode(corner,corners,radius,center).
    fill("white"); //Define a cor
    ellipse(ball.x, ball.y, ball.r); //Desenha a bola

    rectMode(CENTER); //Define o retangulo usando a altura e largura
    fill("yellow");
    rect(paddle.x, paddle.y, paddle.w, paddle.h); //Desenha um retengulo

    paddle.x = constrain(mouseX,paddle.w/ 2,width - paddle.w/ 2);
}

function mousePressed(){ //funçao definido pelo js e p5 que ve se o mouse e clicado
    ball.vx = random(-4,4);
    ball.vy = -5;
}

function createBricks(){
    bricks = [];
    let totalWidth = cols * (brickWidth + spacing) - spacing;
    let startX = (width - totalWidth) - 15;
    for (let r = 0; r < rows; r++){
        for (let c = 0; c <cols; c++){
            bricks.push({
                x: startX + c * (brickWidth + spacing),
                y: 80 + r * brickHeight,
                w: brickWidth - spacing,
                h: brickHeight - 5,
                color: [random(100,255),random(100,255),random(100,255)]
            })
        }
    }
}