
function setup()
{
  createCanvas(500, 500);
  background(200);
}

function draw()
{
  noStroke()
  fill(255,200,0)
  rect(100, 100, 300, 300, 20);
  fill(120,170,140)
  triangle(120, 100, 148, 45, 176, 100);
  triangle(325, 100, 353, 45, 381, 100);
  fill(10)
  circle(200, 220, 40);
  circle(300, 220, 40);
  noFill()
  stroke(10)
  arc(225, 310, 80, 80, PI + QUARTER_PI, TWO_PI);
}
