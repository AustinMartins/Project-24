
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var engine, world;
var side3;
var side2;
var side1;
var ground1;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground1 = new ground(400,690,800,10);

	paper1 = new Paper(100,670,10);

	side1 = new dustbin(680,670,200,20);
	side2 = new dustbin(570,630,20,100);
	side3 = new dustbin(790,630,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground1.display();

  paper1.display();

  side1.display();
  side2.display();
  side3.display();

  keypressed();

  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.2,y:-1.2})
	}
}
