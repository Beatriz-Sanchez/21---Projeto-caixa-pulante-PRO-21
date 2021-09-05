var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, bordas;
var musica;

function preload(){
    // carregue o som aqui
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY

}

function draw() {
    background(rgb(169,169,169));
    bordas=createEdgeSprites();
    bola.bounceOff(bordas);

    
    //escreva o código para a bola quicar no bloco1
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        //escreva o código para definir velocityX e velocityY da bola como 0

        //escreva o código para parar a música
    }

    //escreva o código para a bola quicar no bloco3

    //escreva o código para a bola quicar no bloco4

    drawSprites();
}