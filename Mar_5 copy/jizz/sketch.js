let xPos = 0;
let xSpeed = 2;
let yPos = 0;
let ySpeed = 2;
let angle = 200;
let freq = 0.1;
let xPos2 = [];
let yPos2 = [];
let xSpd2 = [];
let ySpd2 = [];
let sizes = [];
let total = 10;
let a, b, c, d, e, f, g, h, i, j, x, y;
let r1 = 3;
let aa = 0;
let bb = 0;
let cc = 30;
let dd = 15;
let ee = -10;
let ff = 7.5;
let gg = 0;
let hh = -2.5;
let ii = 0;
let jj = 17.5;
function setup() {
  createCanvas(800, 500);
  let canvas = createCanvas(800,500);  canvas.id("p5canvas");  canvas.parent("saucy");
}

function draw() {
  //xPos = xPos + xSpeed;
  //yPos = yPos + ySpeed;
  angleMode(DEGREES);
  background(0, 128, 256);
  rectMode(CORNER);
  noStroke();
  fill(0, 256, 0);
  rect(0, 400, 1600, 100);
  if (xPos > width || xPos < 0) {
    xSpeed = xSpeed * -1;
    clouds(xPos, 200);
  }
  ///GRASS
  for (let a = 0; a <= 800; a += 20) {
    plant(a, 0);
    clouds(a, 0);
    house(a, 0);
    clouds2(a, 0);
  }
  crab();
  push();
  missile();
  drawMissiles();
  pop();
}
//cannot get grass to be duplicated

function plant(xPos, yPos) {
  push();
  xPos += xPos = -frameCount / 5;
  noStroke();
  translate(xPos * 7, 400);
  noFill();
  stroke(0, 256, 0);
  strokeWeight(10);
  bezier(0, 10, 10, -30, 20, -35, 30, -33);
  bezier(0, 10, -10, -30, -20, -35, -30, -33);
  line(0, 10, 0, -50);
  pop();
}

function clouds(xPos, yPos) {
  push();

  yPos = sin(angle * freq) * 0.01;
  angle = angle + 1;
  xPos += xPos = -frameCount / 8;
  translate(xPos * 8, yPos * 100 + 200);
  fill(256, 256, 256);
  circle(0, 0, 30);
  circle(25, 0, 50);
  circle(55, 0, 35);
  pop();
}

function clouds2(xPos, yPos) {
  push();
  xPos += xPos = -frameCount / 8;
  yPos = sin(angle * freq) * -0.01;
  angle = angle + 1;
  translate(xPos * 8 + 100, yPos * 100 + 100);
  fill(256, 256, 256);
  circle(0, 0, 30);
  circle(25, 0, 50);
  circle(55, 0, 35);
  pop();
}

function house(xPos, yPos) {
  //room
  push();
  xPos += xPos = -frameCount / 12;
  fill(256, 200, 150);
  translate(xPos * 15, 320);
  beginShape();
  vertex(0, 20);
  vertex(40, -20);
  vertex(70, 20);
  vertex(70, 80);
  vertex(0, 80);
  endShape(CLOSE);
  pop();
  //roof
  push();
  translate(xPos * 15, 320);
  rotate(45);
  fill(200, 100, 0);
  rect(10, -45, 85, 10);
  pop();
  push();
  translate(xPos * 15, 320);
  rotate(315);
  fill(200, 100, 0);
  rect(-40, 5, 85, 10);
  pop();
  //door
  push();
  translate(xPos * 15, 320);
  fill(30, 0, 30);
  rect(30, 60, 10, 20);
  fill(0, 150, 256);
  rect(10, 20, 15);
  rect(40, 20, 15);
  pop();
}

//if (yPos > height || yPos < 0) {
// ySpeed = ySpeed * -1;
//  fill(random(0, 256), random(0, 256), random(0, 256));
//}
function crab() {
  //eye stalks
  translate(0, -100);
  push();
  noFill();
  strokeWeight(10);
  stroke(256, 50, 50);
  bezier(250, 300, 200, 200, 200, 200, 200, 200);
  bezier(350, 300, 400, 200, 400, 200, 400, 200);
  pop();
  //body
  strokeWeight(5);
  fill(256, 50, 50);
  stroke(150, 0, 0);
  ellipse(300, 310 + sin(angle * freq) * 3, 300, 100);
  //eyes
  noStroke();
  fill(0, 0, 0);
  ellipse(200, 200, 40);
  ellipse(400, 200, 40);
  //eyebrows
  push();
  stroke(0, 0, 0);
  strokeWeight(15);
  line(220, 200, 185, 170);
  line(380, 200, 415, 170);
  pop();
  //Lleg
  push();
  rotate(sin(angle * freq) * 0.5);
  strokeWeight(5);
  fill(256, 50, 50);
  stroke(150, 0, 0);
  ellipse(150, 350, 150, 25);
  ellipse(450, 350, 150, 25);
  pop();
  //Rleg
  push();
  rotate(sin(angle * freq) * 1);
  strokeWeight(5);
  fill(256, 50, 50);
  stroke(150, 0, 0);
  ellipse(75, 425, 25, 150);
  ellipse(525, 425, 25, 150);
  pop();
  //claws
  push();
  strokeWeight(5);
  fill(256, 50, 50);
  stroke(150, 0, 0);
  circle(460, 300, 40);
  circle(500, 275, 50);
  pop();
  push();
  stroke(256, 50, 50);
  strokeWeight(20);
  noFill();
  bezier(550, 150, 525, 275, 475, 275, 450, 150);
  pop();
  push();
  strokeWeight(5);
  fill(256, 50, 50);
  stroke(150, 0, 0);
  circle(140, 300, 25);
  circle(125, 280, 30);
  pop();
  push();
  stroke(256, 50, 50);
  strokeWeight(20);
  noFill();
  bezier(50, 200, 75, 300, 125, 300, 150, 200);
  pop();
}

function missile() {
  if (mouseIsPressed) {
    drawMissiles();
  }
}

function drawMissiles() {
  for (let i = 0; i < xSpd2.length; i++) {
    let x = xPos2[i];
    let y = yPos2[i];
    xPos2[i] += xSpd2[i];
    yPos2[i] += ySpd2[i];
    console.log(xPos2)
    push();
    f=256
    if(xPos2[i]<300){
      f=0
      fill((random(100,256)),random(100,0),0)
      circle(x+random(0,10),y+random(105,125),60)
      fill((random(100,256)),random(100,0),0)
      circle(x+random(0,10),y+random(105,125),50)
      fill((random(100,256)),random(100,0),0)
      circle(x+random(0,10),y+random(105,125),45)
      fill((random(100,256)),random(100,0),0)
      circle(x+random(0,10),y+random(105,125),30)
      fill((random(100,256)),random(100,0),0)
      circle(x+random(0,10),y+random(105,125),20)
      fill((random(100,256)),random(100,0),0)
      circle(x+random(0,10),y+random(105,125),10)
    }
    translate(x, y + 100);
    fill(100,100,100,f);
    rect(aa, bb, cc, dd);
    fill(75, 50, 50,f);
    triangle(ee, ff, gg, hh, ii, jj);
    pop();
  }
}



function mousePressed() {
  r1=-3
  xPos2.push(mouseX);
  yPos2.push(mouseY);
  xSpd2.push(r1);
  ySpd2.push(random(-3, 3));
}
