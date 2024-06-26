let ball, ball2;
let balls = [];
let totalNum = 2;
let mySound;
//function preload(){
//mySound = loadSound("assets/sound1.mp3");
//}
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);
  // mic = new p5.AudioIn();
  // mic.start();
  //ball = new Ball(200, 100);
  //ball2 = new Ball(100, 200);

  //for(let i = 0; i < totalNum; i ++){
  // let b = new Ball(random(width), random(height), mySound);
  //balls.push(b);
  // }
  // console.log(balls)
}

function draw() {
  background(0);
  // ball.move();
  // ball.bounce();
  // ball.display();
  // ball2.move();
  // ball2.bounce();
  // ball2.display();
  let b = new Ball(mouseX, mouseY)
  balls.push(b)
  balls[0].move();
  balls[0].bounce();
  balls[0].display();
  balls[balls.length - 1].move();
  balls[balls.length - 1].bounce();
  balls[balls.length - 1].display();
  // let v = mic.getLevel();
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].selfCheckOut();
    //balls[i].bounce();
    // balls[i].update(v)
    balls[i].display();
    }
    for(let i = balls.length-1;i>=0; i--){
      if (balls[i].isDone) {
        balls.splice(i, 1);
    }
  }

  while (balls.length > 10000) {
    balls.splice(0, 1)
  }
}
class Ball {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-3, 3);
    this.size = (random(1, 6));
    this.col = [random(256), random(256), random(256)];
    //this.sound = s;
    // console.log(this.sound);
    this.isDone = false;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  //update(vol){
  //this.xSpd += vol;
  //this.ySpd += vol;
  //}

  selfCheckOut() {
    if (this.x > width || this.x < 0) {
      this.isDone = true;
    }
    if (this.y > height || this.y < 0) {
      this.isDone = true;
    }
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xSpd *= -1;
      //this.sound.play();
    }
    if (this.y > height || this.y < 0) {
      this.ySpd *= -1;
      // this.sound.play();
    }
  }

  display() {
    fill(this.col[0], this.col[1], this.col[2]);
    circle(this.x, this.y, this.size);
  }
}