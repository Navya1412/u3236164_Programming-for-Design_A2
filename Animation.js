let a,b,c
function setup() 
{ 
  createCanvas(400, 400); 
  stroke(30); 
  a = height; 
  b = 0; 
  c = 0;
} 
function draw() 
{ 
  background(225); 
  fill(a,110,130) 
  rect(300, a, 100); 
  a = a - 1.4; 
  if(a < 0) 
    { 
      a = height;
    }
  rect(a,1,100); 
   a = a - 1.4; 
  if(a < 0) 
    { 
      a = height; 
    } 
  rect(1,c,100)
  c = c + 1.2;
  if (c > 400)
  {
    c = b;
  }  
  rect(c,300,100)
  c = c + 1.2;
  if (c > 400)
  {
    c = b;
  }  
} 