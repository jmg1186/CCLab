let salad = [];
let totalNum = 50;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("targetBox2")
  angleMode(DEGREES);
  sSalad = new Salad(random(200, 400), random(475, 550));
  // sSalad = new Salad(200, 200);
  
  for(let i =0; i < totalNum; i ++){
    let s = new Salad(random(200, 400), random(450, 550));
    salad.push(s);
  } 
}

function draw() {
  background(200, 100, 0);
  fill(100, 100, 250);
  //hair
  let a = color(150, 100, 0);
  fill(a);
  noStroke();
  ellipse(width/2, 100, 200, 100);
  quad(200, 100, 400, 100, 400, 300, 200, 300);
  //head
  let b = color(250, 200, 150);
  fill(b);
  noStroke();
  quad(225, 125, 375, 125, 375, 275, 225, 275);
  //mouth
  let c = color(0, 0, 0);
  noFill();
  stroke(c);
  strokeWeight(10);
  arc(300, 220, 100, 60, 360, 180);
  noFill();
  push()
  if(mouseX>250 && mouseX<350 && mouseY>220 && mouseY<280)
  fill(0)
  noStroke()
  ellipse(300,220,110,50)
  pop()
  //eyes
  let d = color(256, 256, 256);
  fill(d);
  noStroke();
  circle(275, 175, 40);
  circle(325, 175, 40);
  let e = color(100, 50, 0);
  fill(e);
  circle(275, 175, 15);
  circle(325, 175, 15);
  fill(c);
  circle(275, 175, 10);
  circle(325, 175, 10);
  fill(a);
  noStroke();
  ellipse(250, 125, 100, 50);
  noStroke();
  ellipse(350, 125, 100, 50);
  //neck
  fill(b);
  noStroke();
  quad(265, 275, 335, 275, 335, 450, 265, 450);
  push();
  fill(256, 256, 0);
  noStroke();
  ellipse(width/2, 350, 200, 100);
  quad(200, 350, 400, 350, 400, 400, 200, 400);
  pop();
  //table
  push();
  fill(100, 50, 0);
  rect(0, 400, 640, 600);
  pop();
  //plate
  push();
  fill(256);
  ellipse(width/2, 500, 300, 175);
  pop();
  //cup
  push()
fill(100,150,256)
quad(480,460,470,390,530,390,520,460)
  pop()
  //salad
  for (let i = 0; i < salad.length; i++) {
  salad[i].update(mouseX, mouseY);
  salad[i].checkInside(mouseX, mouseY);
  salad[i].display();
  salad[i].eat()
    }
  for (let i = salad.length - 1; i >= 0; i--) {
    if (salad[i].isDone) {
      salad.splice(i, 1);
    }
  }
  
  //spork and hand and arm
  push()
  fill(256,256,0)
  quad(mouseX,mouseY+20,mouseX,mouseY+60,210,380,210,340)
  pop()
  push()
  ellipse(mouseX+5,mouseY+40,40,50)
  pop()
  push();
  fill(0);
  translate(0, 50);
  rectMode(CENTER);
  rect(mouseX, mouseY, 20, 75);
  ellipse(mouseX, mouseY - 50, 40, 30);
  push();
  fill(0);
  stroke(0);
  strokeWeight(10);
  line(mouseX, mouseY - 50, mouseX, mouseY - 70);
  line(mouseX - 15, mouseY - 50, mouseX - 15, mouseY - 65);
  line(mouseX + 15, mouseY - 50, mouseX + 15, mouseY - 65);
  pop();
  pop();
  
  push()
  fill(b)
  ellipse(mouseX,mouseY+30,30,10)
  ellipse(mouseX,mouseY+40,30,10)
  ellipse(mouseX,mouseY+50,30,10)
  ellipse(mouseX,mouseY+60,30,10)
  circle(mouseX+10,mouseY+20,10)
  pop()
  
}

function mouseReleased() {
  for (let i = 0; i < salad.length - 1; i++) {
    // if (salad[i].touch) {
    if (this.x > 200 && this.x < 300 && this.y > 200 && this.y < 400) {
      salad[i].isDone = true
      
    // }else{
    //   salad[i].isDone = false
    }
    }  
}

class Salad {
  constructor(x, y) {
    this.x1 = random(-30, -15);
    this.y1 = random(-30, -15);
    this.x2 = random(15, 30);
    this.y2 = random(-30, -15);
    this.x3 = random(-15, 15);
    this.y3 = random(15, 30);
    this.x4 = random(-15,15)
    this.y4 = random(-15,15)
    this.x = x;
    this.y = y;
    this.isDone = false
    this.touch = false;
  }

  checkInside(mx, my) {
    if (mouseIsPressed) {
      let d = dist(this.x, this.y, mx, my);
      if (d < 50) {
        this.touch = true;
        console.log("touched");
      } else {
        this.touch = false;
      }
    } else {
      this.touch = false;
    }
  }

  update(mx, my) {
    if (this.touch) {
      this.x = mx;
      this.y = my;
      
    }
  }

  eat() {
    if (this.x > 250 && this.x < 350 && this.y > 200 && this.y < 260) {
      this.isDone = true;
      
    }
  }
  
  display() {
    push();
    translate(this.x, this.y);
    fill(100, 200, 100);
    noStroke();
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    fill(200,0,0)
    circle(this.x4,this.y4,15)
    pop();
  }
}

