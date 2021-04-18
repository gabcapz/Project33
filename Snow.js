class Snow{
  constructor(x,y){
    var options = {
      friction: 0.1,
      restitution:0.1           
    }
    this.snow = Bodies.circle(x,y,10,options);
    this.radius = 15;
    this.image = loadImage("images/snowflake.png");
    World.add(world, this.snow);
  }

  updateY(){     
    if(this.snow.position.y > height){

      Matter.Body.setPosition(this.snow, {x:random(0,1200), y:random(0,1200)});
    }
  }

  showDrop(){
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image, this.snow.position.x, this.snow.position.y, this.radius, this.radius);
  }
}