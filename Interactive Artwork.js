let a = 20;
let b = 20;

function setup() {
  createCanvas(1200, 500);
  fill(120, 160, 80);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    a -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    a += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    b -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    b += 5;
  }

  clear();
  square(a, b, 55, 15);

  line(5, 5, 200, 5);
  line(5, 95, 100, 95);
  line(200, 5, 200, 200);
  line(100, 95, 100, 300);
  line(200, 200, 400, 200);
  line(100, 300, 500, 300);
  line(400, 5, 400, 200);
  line(500, 100, 500, 300);
  line(400, 5, 1100, 5);
  line(500, 100, 1000, 100);
  line(1000, 100, 1000, 350);
  line(1100, 5, 1100, 450);
  line(475, 350, 1000, 350);
  line(575, 450, 1100, 450);
  line(475, 350, 475, 475);
  line(575, 450, 575, 450);
 }