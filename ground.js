class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
            //restitution:2.0
        } 
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.x = x;
        this.y = y
        this.width = width;
        this.height = height;
        World.add(world, this.body)
       }
       display(){
           var groundPos = this.body.position
           push();
           translate(groundPos.x,groundPos.y)
           rectMode(CENTER)
           fill(0)
           rect(0,0,this.width, this.height);
           pop();          
        }

   }