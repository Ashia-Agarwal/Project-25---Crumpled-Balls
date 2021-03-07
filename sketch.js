var engine, world, ground, groundSprite;
var b, d;
function setup() {
	createCanvas(800, 500);
	engine = Matter.Engine.create();
	world = engine.world;
	ground = Matter.Bodies.rectangle(width / 2, height - 5, width, 10, {isStatic: true});
  	Matter.World.add(world, ground);
	groundSprite = createSprite(width / 2, height - 5, width, 10);
	groundSprite.shapeColor = color(0,0,255);
	b = new Ball(100, 400);
	d = new Dustbin(world, ground.position.y);
	Matter.Engine.run(engine);
}

function draw() {
  background(255);
  keyPressed();
  d.display();
  b.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(b.body, b.body.position, {x: 35, y: -55});
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(b.body, b.body.position, {x: -35, y: 55});
	}
  }