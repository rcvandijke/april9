let ball;
let direction;
// Create an HTML5 canvas
function setup(){
  createCanvas(640,480);
  background(140);
  ball = createVector(0,0);
  direction = createVector(1,1);
}

// Draw some stuff on it
function draw(){
  background(140);
  fill(0);
  ellipse(ball.x,ball.y,20,20);
  ball.add(direction);
}
