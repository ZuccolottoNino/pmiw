let juego = new Juego();

function setup() {
  juego.iniciar();
  createCanvas(640, 480);
}


function draw() {
  background (0, 0, 255);
  juego.dibujar();
}
