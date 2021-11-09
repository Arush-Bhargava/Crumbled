const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj;
var ground;
var paper;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(windowWidth / 2, windowHeight - 50, 30);
  dustbinObj = new Dustbin(1200, 680);

  paper = new Paper(200, 600, 70);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);

  drawSprites();

  ground.display();
  paper.display();
  dustbinObj.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 130,
      y: -145,
    });
  }
}
