let balls = [];
let totalNum = 200;
let mySound;

let sBall;

function preload() {
  mySound = loadSound('assets/beat.mp3')
}


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);

  sBall = new Ball(random(width), random(height))
  sBall.size = 80
  sBall.col = [0, 0, 0]

  // for(let i =0; i < totalNum; i ++){
  //   let b = new Ball(random(width), random(height));
  //   balls.push(b);
  // }  

  // console.log(balls);

}

function draw() {
  background(200);

  sBall.move()
  sBall.bounce()
  sBall.display()

  if (random(1.00) < 0.19) {
    let b = new Ball(random(width), random(height));
    balls.push(b);
  }


  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].checkOutOfCanvas();
    // balls[i].checkMouse(mouseX, mouseY)
    balls[i].checkCollision(sBall);
    balls[i].checkAllObjs(balls)
    balls[i].display();
  }

  for (let i = balls.length - 1; i >= 0; i--) {
    if (balls[i].isDone) {
      balls.splice(i, 1);
    }
  }

  while (balls.length > 500) {
    balls.splice(0, 1);
  }


  fill(0);
  text(balls.length, 50, 50);


}
function mouseReleased() {
  for (let i = 0; i < balls.length - 1; i++) {
    if (balls[i].bTouch) {
      balls[i].isDone = true
      mySound.play()
    }
  }
}

class Ball {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-3, 3);
    this.size = random(5, 10);
    this.col = [256, 256, 256];
    this.isDone = false;
    this.betouch = false
  }

  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  update(vol) {
    this.xSpd += vol;
    this.ySpd += vol;
  }

  checkOutOfCanvas() {
    if (this.x > width || this.x < 0) {
      this.isDone = true;
    }

    if (this.y > height || this.y < 0) {
      this.isDone = true;
    }
  }

  checkMouse(mX, mY) {
    let d = dist(this.x, this.y, mX, mY)
    if (d < this.size / 2) {
      if (mouseIsPressed) {
        this.col = [256, 256, 0]
      } else {
        this.col = [256, 0, 0]
      }
      this.col = [256, 0, 0]
      this.bTouch = true
    } else {
      this.col = [256, 256, 256]
      this.bTouch = false
    }

  }

  checkCollision(otherObj) {
    let d = dist(this.x, this.y, otherObj.x, otherObj.y)
    if (d < (this.size / 2) + otherObj.size / 2) {
      this.col = [0, 0, 256]
      this.bTouch = true
      this.shake();
    } else {
      this.col = [256, 256, 256]
      this.bTouch = false
    }
  }

  checkAllObjs(allObjs) {
    for (let i = 0; i < allObjs.length; i++) {
      if (allObjs[i] != this) {
        let d = dist(this.x, this.y, allObjs[i].x, allObjs[i].y)
        if (d < 100) {
          line(this.x, this.y, allObjs[i].x, allObjs[i].y)
        } else {
          this.col = [256, 256, 256]
        }
      }
    }
  }

  shake() {
    this.x += random(-3, 3)
    this.x += random(-3, 3)
  }

  speedUp() {
    this.xSpd *= 1.15
    this.ySpd *= 1.15
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xSpd *= -1;
      // this.sound.play();
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
