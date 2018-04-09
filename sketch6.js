let ball;
let direction;

// Create an HTML5 canvas
function setup(){
  createCanvas(640,480);
  background(140);
  ball = new Ball(0,0,20,createVector(1,1));
}

// Draw some stuff on it
function draw(){
  background(140);
  ball.update();
  ball.display();
}

function Ball(x,y,size, direction) {
  this.position = createVector(x,y);
  this.size = size;
  this.direction = direction;
  this.update = function(){
    this.position.add(this.direction);
    if (this.position.x > width || this.position.x < 0){
      this.direction.x = -this.direction.x;
    }
    if (this.position.y > height || this.position.y < 0){
      this.direction.y = -this.direction.y;
    }
  }
  this.display = function(){
    fill(0);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}
