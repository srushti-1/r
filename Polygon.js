class Polygon{
    constructor(x,y){
        polygon = Bodies.circle(50,200,10);
        World.add(world, polygon)
        this.image = loadImage("polygon.png");
        
    }
    display(){
        imageMode(CENTER);
        image(polygon_image, polygon.position.x, polygon.position.y, 40, 40);
    }
  }