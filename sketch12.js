let ball;
let wall;

// Create an HTML5 canvas
function setup(){
  createCanvas(640,480);
  background(140);
  ball = new Ball(40,40,20,createVector(2,2));
  wall = new Wall(width/2-100, height/2-50, 200, 100)
}

function draw(){
  background(140);
  wall.display();
  ball.update();

  if (ball.intersects(wall)) {
    if (ball.position.y > wall.y && ball.position.y < wall.y + wall.height) {
      ball.direction.x = -ball.direction.x
    } else if (ball.position.x > wall.x && ball.position.x < wall.x + wall.width){
      ball.direction.y = -ball.direction.y
    }
  }
  ball.display();

}

function Ball(x,y,size, direction) {
  this.position = createVector(x,y);
  this.size = size;
  this.direction = direction;
  this.color = color(0)
  this.shape = "circle"

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
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  this.intersects = function(other){
    if (other.shape == "rectangle"){
      if (this.position.x + ball.size/2 >= other.x && this.position.x -ball.size/2 <= other.x+other.width
      && this.position.y + ball.size/2 >= other.y && this.position.y - ball.size/2 <= other.y + other.height) {
        return true
      } else {
        return false
      }
    }
  }
}

function Wall(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.shape = "rectangle"

  this.display = function(){
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

}
