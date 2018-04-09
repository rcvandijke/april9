let balls;
let wall;

// Create an HTML5 canvas
function setup(){
  createCanvas(640,480);
  background(140);
  balls = [];
  for (i = 0; i < 100; i++){
    balls.push(new Ball(40 + i, 40 +i, 20, createVector(.01*(i+1), .01*i)))
  }
  ball = new Ball(40,40,20,createVector(2,2));
  wall = new Wall(width/2-100, height/2-50, 200, 100)
}

function draw(){
  background(140);
  wall.display();

  for (i=0; i< balls.length; i++){
    let ball = balls[i]
    ball.update();
    let intersecting = ball.intersects(wall)
    if (intersecting[0]) {
      if (intersecting[1] == "left" || intersecting[1] == "right"){
        ball.direction.x = -ball.direction.x
      } else if (intersecting[1] == "top" || intersecting[1] == "bottom"){
        ball.direction.y = -ball.direction.y
      }
      wall.color = color(random(255), random(255), random(255));

    }
    ball.display();
  }
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
      let position = null;
      if (this.position.x + ball.size/2 >= other.x && this.position.x -ball.size/2 <= other.x+other.width
      && this.position.y + ball.size/2 >= other.y && this.position.y - ball.size/2 <= other.y + other.height) {

        if (this.position.x +ball.size/2 - other.x <= ball.size/2 &&this.position.x +ball.size/2 - other.x <= ball.size/2 >= -ball.size/2){
          position = 'left';
        } else if (this.position.x -ball.size/2 - (other.x + other.width) <= ball.size/2 && this.position.x -ball.size/2 - (other.x + other.width)  >= -ball.size/2){
          position = 'right';
        } else if (this.position.y + ball.size/2 - other.y <= ball.size/2 && this.position.y + ball.size/2 - other.y >= -ball.size/2){
          position = 'top';
        } else if (this.position.y - ball.size/2 -(other.y + other.height) <= ball.size/2 && this.position.y - ball.size/2 -(other.y + other.height) >= -ball.size/2){
          position = 'bottom';
        }
        return [true, position]
      } else {
        return [false, position]
      }
    }
  }
}

function Wall(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.shape = "rectangle";
  this.color = color(255);
  this.display = function(){
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

}
