let v = createVector(1, 0);

function setup() {
  createCanvas(700, 600);
}

function draw() {
  background("#292a2b");
  fill("#9F7AEA");
  translate(300, 300);

  rectMode(CENTER);
  circle(v.x, v.y, 80);
}
