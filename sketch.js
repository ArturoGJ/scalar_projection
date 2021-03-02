let translateX = 50;
let translateY = 300;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  translate(translateX,translateY);
  background(220);
  let a = createVector(10,0);
  let b = createVector(300, -50);
  let c = createVector(pmouseX-translateX, pmouseY-translateY);
  text('a', a.x-10, a.y+10);
  text('b', b.x+5, b.y+10);
  text('c', c.x-10, c.y);
  push();
  strokeWeight(2);
  line(a.x, a.y, b.x, b.y);
  line(a.x, a.y, c.x, c.y);
  pop();
  let s = scalarProjection(c,b);
  text('s', s.x, s.y+15);
  push()
  strokeWeight(0.5);
  line(c.x, c.y, s.x, s.y);
  fill(255,0,0);
  circle(s.x,s.y, 10)
  pop()
}


function dot_product(v1, v2) {
  return (v1.x * v2.x) + (v1.y * v2.y);
}

function scalarProjection(u, v){
  // [(u dot v) / |v|] * (v / |v|)
  let num = dot_product(u,v);
  let den = sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
  let normalizedV = v.normalize();
  
  return normalizedV.mult(num/den);
}