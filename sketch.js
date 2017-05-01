var planeObjs = [{}]

var blueplane;

function preload() {
  blueplane = loadImage("blue-plane.png");
}

function setup() {
  createCanvas(900,600);
}

function draw() {
  background(230)
  //paperPlane();
  //translate(mouseX, mouseY)
  addPlane(paperPlane());
  addPlane(paperPlane());
  addPlane(bluePlane());
}

function paperPlane() {
  fill(240)
  triangle(5, 35, 135, 35, 0, 0);
  fill(250)
  triangle(2, 35, 135, 35, 3, 20);
}

function bluePlane() {
  image(blueplane, 0, 0);
}

function addPlane(type) {
  planeObjs.push({planeType: type});
  translate(0, 80);
}