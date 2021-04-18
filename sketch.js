const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg, boy;
var drops = [];
var maxSnow = 100;

function preload(){
  bg = loadImage("images/snow3.jpg");
  boyImage = loadImage("images/boy.png");
  boy2Image = loadImage("images/boy1.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1200,700);
  boy = createSprite(1080, 500, 30, 35);
  boy.addImage(boyImage);

  if(frameCount % 150 === 0){

    for(var i = 0; i < maxSnow; i++){
        drops.push(new Snow(random(0, 1200), random(0, 1200)));
    }

}

}

function draw() {

  Engine.update(engine);

  background(bg);  

for(var i = 0; i < maxSnow; i++){
  drops[i].showDrop();
  drops[i].updateY()
  
}

  drawSprites();
}

function keyPressed(){

  if (keyCode === LEFT_ARROW){
    boy.x = boy.x - 20;
    boy.addImage(boyImage);
    
  }

  if (keyCode === RIGHT_ARROW){
    boy.x = boy.x + 20;
    boy.addImage(boy2Image);
  }
  
}