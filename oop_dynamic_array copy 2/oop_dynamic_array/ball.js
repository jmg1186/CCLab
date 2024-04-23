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