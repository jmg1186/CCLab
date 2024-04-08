let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new jmgDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  drawFloor();
  dancer.update();
  dancer.display();
}

// You only code inside this class.
class jmgDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xRotate = 25
    this.yRotate = 50
    this.angle = 0
    // add perties for your dancer here:
  }
  update() {
    this.xRotate = sin(frameCount/4) * 10
    this.yRotate = sin(frameCount/4) * 10
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(256);
    rectMode(CENTER);
    //body
    fill(200,0,0)
    this.angle = this.angle + 1
    rect(0,(sin(this.angle/3)*10)+10,50,80);
    push()
    //right arm
    rectMode(CORNER);
    translate(25,(sin(this.angle/2)*10)-30)
    rotate(radians(-frameCount*20))
    fill(200,0,0)
    rect(0,0,25,50);
    pop()
    push()
    //left arm
    rectMode(CORNER);
    translate(-25,(sin(this.angle/2)*10)-30)
    rotate(radians(-frameCount*-20))
    fill(200,0,0)
    rect(0,0,25,50);
    pop()
    push()
    //legs
    rotate(radians(-10))
    fill(200,0,0)
    rect(10,(sin(this.angle/4)*5)+65,20,50);
    pop()
    push()
    rotate(radians(10))
    fill(200,0,0)
    rect(-10,(sin(this.angle/4)*5)+65,20,50);
    pop()
    push()
    //head
    fill(200,0,0)
    circle((cos(this.angle/3)*4)+0,-50,50)
    pop()
    push()
    //mouf
    bezier((cos(this.angle/3)*4)+15,-40,(cos(this.angle/3)*4)+7,-35,(cos(this.angle/3)*4)-7,-35,(cos(this.angle/3)*4)-15,-40)
    pop()
    push()
    //eyez
    fill(0)
    circle((cos(this.angle/3)*4)+10,-50,10)
    circle((cos(this.angle/3)*4)-10,-50,10)
    pop()
    // the next function draws a SQUARE and CROSS
    //this.drawReferenceShapes()
    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(0, 0, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/