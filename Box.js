//Código Inicial Class Box.js PRO C24 V1
class Box{
  constructor(x, y, width, height){
   var options ={
     restitution: 0.8,
     friction: 1.0,
     density: 1.0
   }
   this.body = Bodies.rectangle(x, y, width, height, options);
   this.width = width;
   this.height = height;
   World.add(world,this.body);
  }
 display(){
   var pos = this.body.position;
   var angle = this.body.angle;
   push();
   translate(pos.x, pos.y);
   rotate(angle);
   rectMode(CENTER);
   // Agrega Borde 
   strokeWeight(6);  
  // Cambio color
   stroke("#E14709");        
   fill(255);
   rect(0, 0, this.width, this.height);
   pop();
 }
  
}
