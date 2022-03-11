var paredes;

var quadrado;

var textos = ["Verde! →", "Amarelo!  ↑", "Preto! ↓", "← Roxo!"]

var gameState = start;

function setup() {
  createCanvas(400,400);
  quadrado = createSprite(200,200,20,20);
  paredes = createEdgeSprites();
}

function draw() {

  background("red");

  quadrado.shapeColor = color("white");

  textSize(10);
  fill("green");
  textFont("Georgia");
  text(textos[0],350,200);

  if (gameState == "green"){
   background("green");
   textSize(10);
   fill("yellow");
   textFont("Georgia");
   text(textos[1],180,20);
   textos[0].delete;
 }

 if (gameState == "yellow"){
   background("yellow");
   textSize(10);
   fill("black");
   textFont("Georgia");
   text(textos[2],180,390);
   textos[1].delete;
 }

 if (gameState == "black"){
   background("black");
   textSize(10);
   fill("purple");
   textFont("Georgia");
   text(textos[3],10,180);
   textos[2].delete;
 } 

  if (gameState == "purple"){
   background("purple");
   textos[3].delete;
 }

 if (keyIsDown(RIGHT_ARROW)){
    quadrado.velocityX = 3;
 }

 if (keyIsDown(LEFT_ARROW)){
    quadrado.velocityX = -3;
 }

 if (keyIsDown(UP_ARROW)){
    quadrado.velocityY = -3;
 }

 if (keyIsDown(DOWN_ARROW)){
    quadrado.velocityY = 3;
 }

 if (quadrado.bounceOff(paredes[1])){
    gameState = "green";
 }

 if (quadrado.bounceOff(paredes[2])){
   gameState = "yellow";
 }

 if (quadrado.bounceOff(paredes[3])){
   gameState = "black";
 }

 if (quadrado.bounceOff(paredes[0])){
   gameState = "purple";
 } 

 drawSprites();

}



