let fruits = [];
let resetting = false;

let fruitColors = [
  [235, 70, 70],
  [245, 180, 50],
  [240, 100, 140],
  [170, 90, 180],
  [245, 130, 50]
];

function setup() {
  createCanvas(600, 600);
  resetFruits();
}

function draw() {
  background(255);

  for (let fruit of fruits) {

    if (resetting) {
      fruit.y += 12;
    }

    drawFruit(fruit);
  }


  if (!resetting) {
    let allPressed = true;

    for (let fruit of fruits) {
      if (!fruit.pressed) {
        allPressed = false;
        break;
      }
    }


    if (allPressed) {
      resetting = true;
    }
  }

  if (resetting) {
    let allGone = true;

    for (let fruit of fruits) {
      if (fruit.y < height + 100) {
        allGone = false;
        break;
      }
    }

    if (allGone) {
      resetFruits();
      resetting = false;
    }
  }
}


function resetFruits() {
  fruits = [];

  let spacing = 170;
  let startX = 130;
  let startY = 130;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {

      let x = startX + col * spacing;
      let y = startY + row * spacing;

      x += random(-10, 10);
      y += random(-10, 10);

      let c = random(fruitColors);

      fruits.push({
        x: x,
        y: y,

        size: random(85, 105),

        r: c[0],
        g: c[1],
        b: c[2],

        leafAngle: random(-0.4, 0.4),

        pressed: false,

        splashes: []
      });
    }
  }
}


function drawFruit(fruit) {

  if (fruit.pressed) {
    drawJuice(fruit);
  }

  push();
  translate(fruit.x, fruit.y);
  noStroke();


  if (fruit.pressed) {

    fill(
      fruit.r * 0.7,
      fruit.g * 0.7,
      fruit.b * 0.7
    );

    ellipse(
      0,
      0,
      fruit.size * 1.3,
      fruit.size * 0.75
    );
  }

  else {

    let d = dist(
      mouseX,
      mouseY,
      fruit.x,
      fruit.y
    );


    if (d < fruit.size / 2) {

      fill(
        min(fruit.r + 20, 255),
        min(fruit.g + 20, 255),
        min(fruit.b + 20, 255)
      );

      ellipse(
        0,
        0,
        fruit.size * 1.08,
        fruit.size * 1.08
      );
    }

    else {

      fill(
        fruit.r,
        fruit.g,
        fruit.b
      );

      ellipse(
        0,
        0,
        fruit.size,
        fruit.size
      );
    }
  }

  drawLeaf(fruit);

  pop();
}


function drawLeaf(fruit) {

  push();

  rotate(fruit.leafAngle);

  noStroke();
  fill(60, 145, 70);

  beginShape();

  vertex(0, -30);
  vertex(10, 0);
  vertex(0, 30);
  vertex(-10, 0);

  endShape(CLOSE);

  pop();
}


function drawJuice(fruit) {

  push();
  translate(fruit.x, fruit.y);

  noStroke();

  fill(
    fruit.r * 0.75,
    fruit.g * 0.75,
    fruit.b * 0.75
  );

  ellipse(
    0,
    0,
    fruit.size * 1.5,
    fruit.size * 0.55
  );

  ellipse(
    0,
    0,
    fruit.size * 1.15,
    fruit.size * 0.9
  );

  ellipse(
    0,
    0,
    fruit.size * 1.7,
    fruit.size * 0.35
  );

  for (let splash of fruit.splashes) {
    ellipse(
      splash.x,
      splash.y,
      splash.size
    );
  }

  pop();
}


function mousePressed() {

  if (resetting) {
    return;
  }

  for (let fruit of fruits) {

    let d = dist(
      mouseX,
      mouseY,
      fruit.x,
      fruit.y
    );

    if (d < fruit.size / 2 && !fruit.pressed) {

      fruit.pressed = true;

      for (let i = 0; i < 12; i++) {

        let angle = random(TWO_PI);

        let distance = random(
          fruit.size * 0.55,
          fruit.size * 0.9
        );

        fruit.splashes.push({
          x: cos(angle) * distance,
          y: sin(angle) * distance,
          size: random(6, 12)
        });
      }

      break;
    }
  }
}


function keyPressed() {

  if ((key === 'r' || key === 'R') && !resetting) {
    resetting = true;
  }
}