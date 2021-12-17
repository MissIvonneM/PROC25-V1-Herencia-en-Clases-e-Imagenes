
//Debug a Bird para que sólo tenga los parametros de únicos de Bird
class Bird extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }

  /*
  //Código Inicial Class Bird.js PRO C24 V1 Borramos lo que no será útil en la Exteds
class Bird{
 constructor(x, y){
   var options ={
     restitution: 1.5,
     friction: 1.0,
     density: 0.5
   }
   this.body = Bodies.rectangle(x, y, 50, 50, options);
   this.width = 50;
   this.height = 50;
   this.image= loadImage("sprites/bird.png");
   World.add(world,this.body);
  }
 display(){
   var pos = this.body.position;
   pos.x = mouseX;
   pos.y = mouseY;
   var angle = this.body.angle;
   push();
   translate(pos.x, pos.y);
   rotate(angle);
   
   // Coloca Imagen en el centro del Body
   imageMode(CENTER);
   // Agrega argumentos para image() colocando primero this.image
   image(this.image,0, 0, this.width, this.height);
   pop();
 }
}*/

