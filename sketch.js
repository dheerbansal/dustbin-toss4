var  ball,obstacle1, obstacle2, obstacle3, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	
	ball = new Ball(300,770,50);
	


	obstacle1 = new Target(820,720,20,120);
	//obstacle1.shapeColor = "white";
	obstacle2 =new Target(900,770,150,20);
	//obstacle2.shapeColor = "white";
	obstacle3 = new Target(980,720,20,120);
	//obstacle3.shapeColor = "white";
	
	ground = new Ground(600,790,1200,20);
	ground.shapeColor = "purple";

	var render = Render.create({
		element:document.body,
		engine: engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});
	Engine.run(engine);
  
}

function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background(0);
  //ellipse();
  

  //keyPressed();

  ground.display();
  ball.display();
  obstacle1.display();
  obstacle2.display();
  obstacle3.display();
  
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
  }