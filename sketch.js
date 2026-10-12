function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(230,200,140);
  
  push();
  noStroke();
  fill(100);
  rect(50, 0, 500, 600, 20);
  pop();

  push();
  fill(120);
  rect(100, 45, 400, 505, 20);
  pop();

  push();
  fill(200);
  stroke(150);
  strokeWeight(3);
  ellipse(320, 170, 350, 230);
  ellipse(320, 170, 280, 170);

  circle(150, 300, 150);
  fill(180);
  circle(170, 300, 100);

  strokeWeight(2);
  fill(10,200,200,20);
  circle(160, 300, 120);
  pop();

  push();
  fill(200);
  stroke(150);
  strokeWeight(3);
  circle(430, 405, 270);
  circle(200, 480, 220);
  pop();

  push();
  fill(240,120,30, 240);
  noStroke();
  circle(430, 405, 265);
  fill(240,180,30);
  stroke(240,200,30,200);
  strokeWeight(2);
  fill(240,180,30);
  rotate(PI/4);
  rect(550,0, 40, 110, 10);
  rotate(PI/9);
  rect(600,-300, 40, 110, 10);
  pop();

  push();
  fill(240,180,30);
  stroke(240,200,30,200);
  strokeWeight(2);
  rect(400,300, 40, 110, 10);
  rect(450,350, 40, 110, 10);
  rotate(-PI/4);
  rect(0,500, 40, 60, 10);
  pop();

  push();
  fill(240,180,30);
  stroke(240,200,30,200);
  strokeWeight(2);
  rect(360,470, 40, 40, 10);
  pop();

  push();
  noStroke();
  fill(255, 255, 255, 90);
  rotate(-PI/4);
  rect(-300,450,200,100,20);
  rotate(-PI/7);
  rect(-500,300,200,100,20);
  rotate(PI/4);
  rect(-130,450,200,100,20);
  rotate(PI/7);
  rect(100,400,200,100,20);
  rotate(PI/8);
  rect(260,330,200,100,20);
  pop();

  push();
  fill(240,180,30);
  stroke(240,200,30,200);
  strokeWeight(2);
  circle(200,500,60);
  fill(255);
  circle(200,500,20);
  pop();

  push();
  fill(240,180,30);
  stroke(240,200,30,200);
  strokeWeight(2);
  circle(150,450,60);
  fill(255);
  circle(150,450,20);
  pop();

  push();
  fill(220,160,30);
  stroke(240,200,30,200);
  strokeWeight(2);
  circle(250,450,60);
  fill(255);
  circle(250,450,20);
  pop();

  push();
  fill(220,160,30);
  stroke(240,200,30,200);
  strokeWeight(2);
  rect(200, 400, 30, 60, 10);
  circle(160,520,60);
  fill(255);
  circle(160,520,20);
  pop();

  push();
  noStroke();
  fill(250, 210, 120);
  rect(200,120,240,100,30);
  fill(0);
  rect(240,120, 160, 100, 5);
  pop();

  push();
  stroke(250, 210, 120);
  strokeWeight(2);
  line(280,120,280,220);
  line(320,120,325,220);
  line(355,120,359,220);
  pop();

  push();
  noStroke();
  fill(240,180,100);
  rect(185, 150, 25, 40, 10);
  rect(435, 150, 10, 40, 5);
  pop();

  push();
  noStroke();
  fill(240,120,30, 50);
  circle(450, 450, 100);
  circle(480, 400, 100);
  circle(400, 380, 100);
  circle(400, 460, 100);
  pop();

  push();
  noStroke();
  fill(255, 255, 255, 100);
  rect(250,130,150,10, 20);
  pop();

  push();
  translate(mouseX, mouseY);
  rotate(PI/4);
  rectMode(CENTER);

  fill(180);
  rect(0, -12, 300, 12, 6);

  fill(180);
  rect(0, 12, 300, 12, 6);
  pop();
}
