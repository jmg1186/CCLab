// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 3000; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  
}

function draw() {
  //background(0);
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    //particles.push(new Particle(random(width+20,width-20),random(height+20,height-20)))
    p.update();
    p.display();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    //this.xSpd = 
    //this.ySpd = 
    this.angle = random(0,50)
    this.freq = 1/1000
    //this.accel = random
    this.r = random(0,500);
    this.cx = random(-300,300);
    this.cy = random(-300,300);
    this.dia = random(2,18);
    this.rc = -this.r+random(300,500)
    this.g = -this.r+random(100,200)
   // this.b = 
  }
  // methods (functions): particle's behaviors
  update() {
    this.cx = cos(this.angle * this.freq) * this.r;
    this.cy = sin(this.angle * this.freq) * this.r;
    this.freq += this.dia/1000

    this.angle += 0.2
    this.r -= 0.5
    this.rc += (random(0,0.5))
    this.g += random(0,0.5)
    //if(this.cx > -10 && this.cx < 10 && this.cy > -10 && this.cy < 10)
    if(this.cx > -5 && this.cx < 5 && this.cy > -5 && this.cy < 5){
    particles.splice(0,1)
    }
  }
  display() {
    // particle's appearance
    push();
    translate(400, 300);
    noStroke()
    //fill(this.rc, this.g, this.b)
    fill(this.rc,this.g,0)
    circle(this.cx, this.cy, this.dia);
    push()
    fill(0,0,0)
    circle(0, 0, this.dia+20);
    pop()
    pop();
  }
}
