let ball;
let wall;

// Create an HTML5 canvas
function setup(){
  createCanvas(640,480);
  background(140);
  ball = new Ball(40,40,20,createVector(2,2));
  wall = new Wall(width/2-100, height/2-50, 200, 100)
}

// Draw some stuff on it
function draw(){
  background(140);
  ball.update();
  ball.display();
  wall.display();
}

function Ball(x,y,size, direction) {
  this.position = createVector(x,y);
  this.size = size;
  this.direction = direction;
  this.update = function(){
    this.position.add(this.direction);
    if (this.position.x+size/2 > width || this.position.x-size/2 < 0){
      this.direction.x = -this.direction.x;
    }
    if (this.position.y+size/2 > height || this.position.y-size/2 < 0){
      this.direction.y = -this.direction.y;
    }
  }
  this.display = function(){
    fill(0);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}

function Wall(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;

  this.display = function(){
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

}
