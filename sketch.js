var player,playerImg;
var ground
var obs, obsImg, obsGroup;


function preload(){

}

function setup(){
  createCanvas(600,400)
  ground = createSprite(600,380,1200,20);
  ground.velocityX = -5
}

function draw(){
  background("black") 
  drawSprites()

  if (ground.x < 0){
    ground.x = ground.width/2;
  }  

}