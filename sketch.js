const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
var ground_options = {
  isStatic:true
}
var ball;
var ball_options = {
  restitution: 2
}

function setup() {
  createCanvas(400,400);
  //createSprite(200, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground =  Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world,ground);

  ball = Bodies. circle(200,100,10, ball_options);
  World.add(world,ball);
 /* 
  object = Bodies.rectangle(200,200,50,50);
  World.add(world, object);
  console.log(object. type);
  console.log(object. position.x);
*/
}

function draw() {
  background(0,0,0); 
  Engine.update(engine) 
  rectMode(CENTER);
  //rect(object.position.x, object.position.y,50, 50 )
  rect(ground.position.x, ground.position.y, 400, 20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
  //drawSprites();
}