const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,bax,ball;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(700, 390, 100, 10);
  ground1 = new Ground(10, 400, width*2, 12);
  ball = new Ball(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("green");
    text("It is a small game namely crumpled paper ball \n Like throwing paper in the dustbin for Class#24. \
    \n  Press Up Arrow to Start. ", 50, 200)
    fill("blue");
    text("Press Up Arrow to throw your paper in the dustbin.", 50, 300)
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }  
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    ball.display();
    ground1.display();
    dustbin.display();

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(ball.body, ball.body.position, {
      x: 12,
      y: -13
    });
  }
}