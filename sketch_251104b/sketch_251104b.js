let juego;

function setup() {
  juego = new Juego();
  juego.iniciar();
  createCanvas(640, 480);
}


function draw() {
  background (0, 0, 255);
  juego.dibujar();
}
