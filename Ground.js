//Código Inicial Class Ground.js PRO C24 V1 
class Ground{
  constructor(x, y, width, height){
   var options ={
     isStatic: true
   }
   this.body = Bodies.rectangle(x, y, width, height, options);
   this.width = width;
   this.height = height;
   World.add(world,this.body);
  }
display(){
 var pos = this.body.position;
 rectMode(CENTER);
 fill("#521A0E");                // Cambio color a café
 rect(pos.x, pos.y, this.width, this.height);
}
}





/*Código Final Class Ground.js PRO C25 V1 
class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };*/