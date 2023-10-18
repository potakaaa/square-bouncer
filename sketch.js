let x, y;
let w, h;
let xSpeed, ySpeed, rcolorSpeed, gcolorSpeed, bcolorSpeed;
let r, g, b;

// Need website styling!!

function setup() {
  createCanvas(400, 400);
  // Declare parameter variables for square
  x = 90; y = 25;
  w = 40; h = 70;
  xSpeed = 1; ySpeed = 1;

  r = Math.random() * 255; g = Math.random() * 255; b = Math.random() * 255;
}

function draw() {
  background('#B9B4C7s');
  // myLine(x1, y1, x2, y2);
  mySquare(x, y, w, h);
  x += xSpeed;
  y += ySpeed;
  // Checks collision on canvas, direction becomes negative thus opposite direction
  if (x + w >= width || x <= 0) {
    xSpeed *= -1;
    console.log(x, y);
    r = Math.random() * 255; g = Math.random() * 255; b = Math.random() * 255;
  }
  if (y + h >= height || y <= 0) {
    ySpeed *= -1;
    console.log(x, y);
    r = Math.random() * 255; g = Math.random() * 255; b = Math.random() * 255;
  }
}

const myLine = (x1, y1, x2, y2) => {
  // Calculate distance of 2 x and y coordinates
  let distX = x2 - x1; 
  let distY = y2 - y1;
  
  // Use Pythagorean Theorem to calculate distance between 2 points
  let distance = sqrt(distX ** 2 + distY ** 2); 
  
  // Divide distance of x and y to distance to get each step needed to form line
  let stepX = distX / distance; 
  let stepY = distY / distance;
  
  let i = 0; // loops until distance is closed
  for (i = 0; i < distance; i += 2) {
    let x = x1 + stepX * i;
    let y = y1 + stepY * i;
    drawingContext.shadowOffsetX = 1;
    drawingContext.shadowOffsetY = -1;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'gray';
    stroke(r, g, b);
    circle(x, y, 2);
  }
}

const mySquare = (x, y, w, h) => {
  squareW = x + w; squareY = y + h;
  // Creates 4 lines to form a square
  myLine(x, y, squareW, y);
  myLine(squareW, y, squareW, squareY);
  myLine(x + w, squareY, x, squareY);
  myLine(x, y + h, x, y);
}


