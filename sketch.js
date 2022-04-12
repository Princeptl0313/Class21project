
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundObj
var leftSide,rightSide

var ball
var r = 40

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2,
		isStatic: false
	}
	ball = Bodies.circle(260,100,r/2,ball_options)
	World.add(world,ball)
	Engine.run(engine);
	groundObj = new Ground(width/2,670,width,20);
    leftSide = new Ground(1100,600,20,120);
  rightSide = new Ground(1350,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,r,r)
  groundObj.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85, y:-85})
	}
}



