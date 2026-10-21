let reset = 0;
let randomX;
let randomY;
let pathY;
let pathSlope;
let isPressed = false;

function setup() {
  createCanvas(600, 600);
  pathY = random(-200, height + 200);
  pathSlope = random(-0.5, 0.8);
}

function mousePressed() {
  isPressed = true;
}

function mouseReleased() {
  isPressed = false;
  reset = 0;
}

function draw() {

  push();
  noStroke();

  for (let x = 0; x < width; x += 4) {
    for (let y = 0; y < height; y += 4) {

      let n = noise(x * 0.01, y * 0.01, frameCount*0.1);

      fill(
        10 + n * 20 + random(-3, 3),
        60 + n * 45+ random(-5, 5),
        95 + n * 50 + random(-5, 5)
      );

      rect(x, y, 5, 5);
    }
  }
  pop(); 


  push();

  let move = (frameCount * 12) % 900;

  if (frameCount % 75 == 0) {
    pathY = random(-200, height + 200);
    pathSlope = random(-0.5, 0.8);
  }

  translate(
    move - 200,
    pathY + move * pathSlope
  );

  fill(225, 245, 250, 12);
  stroke(240, 250, 255, 1);
  strokeWeight(6);

  triangle(random(-100, -85), random(-35, -25),
          random(-100, -85), random(25, 35),
          random(-45, -30), random(-5, 5));
  ellipse(random(0, 15), random(-10, 10), random(120, 140), random(60, 70));
  circle(random(75, 95), random(-10, 10), random(60, 70));

  triangle(random(-100, -85), random(-35, -25),
          random(-100, -85), random(25, 35),
          random(-45, -30), random(-5, 5));
  ellipse(random(0, 15), random(-10, 10), random(120, 140), random(60, 70));
  circle(random(75, 95), random(-10, 10), random(60, 70));

  triangle(random(-100, -85), random(-35, -25),
          random(-100, -85), random(25, 35),
          random(-45, -30), random(-5, 5));
  ellipse(random(0, 15), random(-10, 10), random(120, 140), random(60, 70));
  circle(random(75, 95), random(-10, 10), random(60, 70));

  triangle(random(-100, -85), random(-35, -25),
          random(-100, -85), random(25, 35),
          random(-45, -30), random(-5, 5));
  ellipse(random(0, 15), random(-10, 10), random(120, 140), random(60, 70));
  circle(random(75, 95), random(-10, 10), random(60, 70));
  pop();


  push();
  if (frameCount % 20 == 0) {
  randomX = random(width);
  randomY = random(height);
  }

  noFill();
  stroke(70, 150, 175, 35);
  strokeWeight(2);

  let size = frameCount % 100;
  let circleCount = int(size / 25);

  for (let i = 0; i < circleCount; i++) {
    circle(randomX, randomY, size + i * 25);

    push();
    translate(randomX, randomY);
    rotate(PI / 3);
    circle(300, 100, size + i * 30);
    pop();
  }
  pop();

    
  if (isPressed) {
    reset++;

    push();
    noFill();
    stroke(70, 150, 175, 80);
    strokeWeight(2);

    let size = random(10, 50);
    let circleCount = int((reset % 60) / 6);

    for (let i = 0; i < circleCount; i++) {
      circle(mouseX, mouseY, size + i * 25);
    }

    pop();
  }

  push();
  noStroke();
  fill(38, 24, 18);
  triangle(400, 0, 600, 100, 800, 0);
  triangle(500, 0, 600, 150, 800, 0);
  triangle(0,600, 200, 600, -10, 500);
  pop();

}
