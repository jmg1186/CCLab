let angle = 0;
let x, y, a, b, c, d, e, f;
let r = 200;
let freq1 = 1;
let freq2 = 5;
let freq3 = 16;
let freq4 = 2;
let accel = 0.01;
let balls = [];
let totalNum = 200;
//let mySound;
let sc = 1
let sBall;
let sSpork;
let sFish;
let fishes = []

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("targetBox1")
  angleMode(DEGREES);

  sBall = new Ball(0,0);
  //sBall.size = 80;
  //sBall.col = [0, 0, 0];

  sFish = new Fishies(width*3/4,0)
  sFish.display()
  sFish.update()
  sFish.move()
  //sFish.display()
  
  sSpork = new Spork(0,0);
  sSpork.update();
  sSpork.display();
sSpork.checkCollision()
  

  
}

function draw() {
  translate(width/2,height/2)
  background(0, 0, 200);
  for(let i =0; i < 1; i ++){
     let f = new Fishies(width*3/4,0);
     fishes.push(f);
}
  for (let i = 0; i < fishes.length/4; i++) {
    fishes[i].move();
    fishes[i].checkOutOfCanvas();
    // balls[i].checkMouse(mouseX, mouseY)
    // balls[i].checkCollision(sBall);
    // balls[i].checkAllObjs(balls);
    fishes[i].display();
  }
  
  if (mouseIsPressed) {
    fill(0);
    noStroke();
    for(let i =0; i < 1; i ++){
     let b = new Ball(0, 0);
     balls.push(b);
   }
  }
  //fishies, etc.

  //sBall.move();
  

  sSpork.update();
  sSpork.display();
  sSpork.checkCollision()
  console.log(d);

  // if (random(1.0) < 0.19) {
  //   let b = new Ball(width/2, height/2);
  //   balls.push(b);
  // }

  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].checkOutOfCanvas();
    // balls[i].checkMouse(mouseX, mouseY)
    // balls[i].checkCollision(sBall);
    // balls[i].checkAllObjs(balls);
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
  //text(balls[i].display, 50, 50);
}

// function mouseReleased() {
//   for (let i = 0; i < balls.length - 1; i++) {
//     if (balls[i].bTouch) {
//       balls[i].isDone = true;
//       //mySound.play()
//     }
//   }
// }

class Ball {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-3, 3);
    this.size = random(5, 10);
    this.col = [0, 0, 0];
    this.isDone = false;
    //this.betouch = false;
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
    if (this.x > width/2 || this.x < -width/2) {
      this.isDone = true;
    }

    if (this.y > height/2 || this.y < -height/2) {
      this.isDone = true;
    }
  }

  // checkMouse(mX, mY) {
  //   let d = dist(this.x, this.y, mX, mY);
  //   if (d < this.size / 2) {
  //     if (mouseIsPressed) {
  //       this.col = [0, 0, 0];
  //     } else {
  //       this.col = [0, 0, 0];
  //     }
  //     this.col = [0, 0, 0];
  //     this.bTouch = true;
  //   } else {
  //     this.col = [0, 0, 0];
  //     this.bTouch = false;
  //   }
  // }

  // checkCollision(otherObj) {
  //   let d = dist(this.x, this.y, otherObj.x, otherObj.y);
  //   if (d < this.size / 2 + otherObj.size / 2) {
  //     this.col = [0, 0, 0];
  //     this.bTouch = true;
  //     //this.shake();
  //   } else {
  //     this.col = [0, 0, 0];
  //     this.bTouch = false;
  //   }
  // }

  // checkAllObjs(allObjs) {
  //   for (let i = 0; i < allObjs.length; i++) {
  //     if (allObjs[i] != this) {
  //       let d = dist(this.x, this.y, allObjs[i].x, allObjs[i].y);
  //       if (d < 100) {
  //         //line(this.x, this.y, allObjs[i].x, allObjs[i].y);
  //       } else {
  //         this.col = [256, 256, 256];
  //       }
  //     }
  //   }
  // }

  //   shake() {
  //     this.x += random(-3, 3)
  //     this.x += random(-3, 3)
  //   }

  //   speedUp() {
  //     this.xSpd *= 1.15
  //     this.ySpd *= 1.15
  //   }

  //   bounce() {
  //     if (this.x > width || this.x < 0) {
  //       this.xSpd *= -1;
  //       // this.sound.play();
  //     }

  //     if (this.y > height || this.y < 0) {
  //       this.ySpd *= -1;
  //       // this.sound.play();
  //     }
  //   }

  display() {
    fill(0, 0, 0);
    circle(this.x, this.y, this.size);
  }
}

// function mousePrssed() {
//   this.sc -= 0.01
// }

class Spork {
  constructor(xPos, yPos) {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.freq = 1;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-3, 3);
    this.size = random(5, 10);
    this.col = [256, 256, 256];
    this.isDone = false;
    this.bTouch = false;
    this.sc = 1
  }

  // move() {
  //   this.x += this.xSpd;
  //   this.y += this.ySpd;
  // }

  update(vol) {
    this.xSpd += vol;
    this.ySpd += vol;
  }

  //   checkOutOfCanvas() {
  //     if (this.x > width || this.x < 0) {
  //       this.isDone = true;
  //     }

  //     if (this.y > height || this.y < 0) {
  //       this.isDone = true;
  //     }
  //   }

  //   checkMouse(mX, mY) {
  //     let d = dist(this.x, this.y, mX, mY)
  //     if (d < this.size / 2) {
  //       if (mouseIsPressed) {
  //         this.col = [256, 256, 0]
  //       } else {
  //         this.col = [256, 0, 0]
  //       }
  //       this.col = [256, 0, 0]
  //       this.bTouch = true
  //     } else {
  //       this.col = [256, 256, 256]
  //       this.bTouch = false
  //     }

  //   }

    checkCollision(otherObj) {
      let d = dist(this.x, this.y, mouseX, mouseY)
      if (d < 20) {
        this.bTouch = true
      } else {
        this.bTouch = false
      }
    }

  
  //   checkAllObjs(allObjs) {
  //     for (let i = 0; i < allObjs.length; i++) {
  //       if (allObjs[i] != this) {
  //         let d = dist(this.x, this.y, allObjs[i].x, allObjs[i].y)
  //         if (d < 100) {
  //           line(this.x, this.y, allObjs[i].x, allObjs[i].y)
  //         } else {
  //           this.col = [256, 256, 256]
  //         }
  //       }
  //     }
  //   }

  display() {
    push()
    scale(this.sc)
    //translate(width/2,height/2)
    noFill();
    angle = angle + 1;
    fill(0);
    rectMode(CENTER);
    rect(this.x, this.y + sin(angle) * 20, 60, 225);
    ellipse(this.x, this.y - 150 + sin(angle) * 20, 120, 90);
    stroke(0);
    strokeWeight(30);
    line(
      this.x,
      this.y - 150 + sin(angle) * 20,
      this.x,
      this.y - 210 + sin(angle) * 20
    );
    line(
      this.x - 45,
      this.y - 150 + sin(angle) * 20,
      this.x - 45,
      this.y - 195 + sin(angle) * 20
    );
    line(
      this.x + 45,
      this.y - 150 + sin(angle) * 20,
      this.x + 45,
      this.y - 195 + sin(angle) * 20
    );
    if(mouseIsPressed){
      this.sc -= 0.0001
      this.x *= this.sc
      this.y *= this.sc
       }
    pop();
    if(this.bTouch == true && mouseIsPressed){
      for(let i =0; i < 1; i ++){
     let b = new Ball(mouseX, mouseY);
     balls.push(b);
       
      }
    }
  }
}

class Fishies {
  constructor(xPos, yPos){
    this.x = xPos
    this.y = yPos
    this.xSpd = random(-3,3)
    this.ySpd = random(-3,3)
    this.size = random(20,50)
    this.r = random(0,256)
    this.g = random(0,256)
    this.b = random(0,256)
    this.isDone = false
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
    if (this.x > width || this.x < -width/2) {
      this.isDone = true;
    }

    if (this.y > height/2 || this.y < -height/2) {
      this.isDone = true;
    }
  }
 // checkCollision(otherObj) {
  //   let d = dist(this.x, this.y, otherObj.x, otherObj.y);
  //   if (d < this.size / 2 + otherObj.size / 2) {
  //     this.col = [0, 0, 0];
  //     this.bTouch = true;
  //     //this.shake();
  //   } else {
  //     this.col = [0, 0, 0];
  //     this.bTouch = false;
  //   }
  // }

  display(){
  noStroke()
  push()
    fill(this.r, this.g, this.b)
    circle(this.x, this.y, this.size)
    quad(this.x,this.y+this.size/2,this.x,this.y-this.size/2,this.x+this.size,this.y+this.size/2,this.x+this.size,this.y-this.size/2)
    strokeWeight(this.size/8)
    stroke(0)
    bezier(this.x-this.size/2,this.y,this.x-this.size/4,this.y,this.x-this.size/8,this.y,this.x-this.size/16,this.y+this.size/4)
    noStroke()
    fill(0)
    circle(this.x-this.size/8,this.y-this.size/8,this.size/5)
    pop()
  }
  
}
