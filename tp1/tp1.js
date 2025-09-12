//https://youtu.be/wtZt_H5aLsA
let ilusion;
let animacion = false;

function preload() {
  ilusion = loadImage("data/imagen.jpg");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(95, 148, 188);
  noFill();
  stroke(255);
  strokeWeight(3);
  image(ilusion, 0, 0, 400, 400);

  cuadrados(400, 0, 400, animacion);
}

function mousePressed() {
  if (mouseX < 400) { // Click en la imagen de la izquierda
    animacion = !animacion; // Cambia entre animación y estático
  }
}
