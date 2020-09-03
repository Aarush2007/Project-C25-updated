//declaring the matter engine, world and bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creating the bodies and the canvas
function setup() {
	createCanvas(1300, 650);

	//creating the engine
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper();
	ground = new Ground();
	dustbin = new Dustbin(900,485,20,220);
	dustbin2 = new Dustbin(1010,585,200,20);
	dustbin3 = new Dustbin(1120,485,20,220);

	//running the engine
	Engine.run(engine);
  
}

//main draw loop
function draw() {
  rectMode(CENTER);
  background(0);
  
  paperBall.display();
  ground.display();
  dustbin.display();
  dustbin2.display1();
  dustbin3.display();
  drawSprites();
 
}

//applying force to the paper ball if up arrow key is pressed 
function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
	}
}



