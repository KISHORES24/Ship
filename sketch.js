var ship ,ship_Shaking;
var seaImg;

function preload()
{
  ship_Shaking = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
  
}

function setup(){
  createCanvas(600,600);
  
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  ship = createSprite(100,400,10,10);

  ship.addAnimation("shaking", ship_Shaking);
  ship.scale = 0.2;

  
  
}

function draw() {
  background("blue");


  drawSprites();
  
  sea.velocityX = -4;
  if (sea.x < 0) {
    sea.x = sea.width/2;
  }

}