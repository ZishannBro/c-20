
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball1;
var ball2;
var ground;
var stand;
var stand2;
var angle=60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  stand = Bodies.rectangle(100,200,17,20,ground_options);
  World.add(world,stand);

  ball1 = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball1);

  ball2 = Bodies.circle(150,15,20,ball_options);
  World.add(world,ball2);

  stand2 = Bodies.rectangle(200,150,17,20,ground_options);
  World.add(world,stand2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(stand2,angle)
  push ()
  translate(stand2.position.x,stand2.position.y)
  rotate (angle)
  rect(0,0,50,20); 
  pop ()
  angle+=0.1
  ellipse(ball1.position.x,ball1.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  rect(stand.position.x,stand.position.y,50,20); 
  
}

