//name spacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options1 = {
    isStatic: true
  }

  ground = Bodies.rectangle(width/2,height,width,20,options1);
  World.add(world,ground);

  var options2 = {
    restitution: 1.0
  }

  ball = Bodies.circle(200,100,35,options2);
  World.add(world,ball);

  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

}

function draw() {
  background("lightblue"); 
  Engine.update(engine);

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,width,20);
  
  ellipseMode(RADIUS);
  fill("orange");
  ellipse(ball.position.x,ball.position.y,35,35);
  
  
}