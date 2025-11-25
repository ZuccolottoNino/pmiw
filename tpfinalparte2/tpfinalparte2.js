//www.youtube.com/watch?v=rmS7SFmleBA
let juego; 
let imgBorde, imgRoca, imgBruja, fondoH, fondoM, imgGanaste, imgPerdiste;
let musica, golpe, victoria, derrota;
let animacionH = [];
let animacionM = [];
let fuente;
let HBoton, MBoton;

const TIEMPO_OBJETIVO = 30;

function preload() {
  imgBorde = loadImage('Imagenes/bordes.png');
  imgRoca = loadImage('Imagenes/roca.png');
  imgBruja = loadImage('Imagenes/Bruja.png');
  fondoH = loadImage('Imagenes/Fondo1.png');
  fondoM = loadImage('Imagenes/Fondo2.png');
  imgGanaste = loadImage('Imagenes/Ganaste.png');
  imgPerdiste = loadImage('Imagenes/Perdiste.png');
  musica = loadSound ('Sonidos/tema.mp3');
  golpe = loadSound ('Sonidos/golpe.mp3');
  victoria = loadSound ('Sonidos/victoria.mp3');
  derrota = loadSound ('Sonidos/derrota.mp3');
  HBoton = loadImage('Imagenes/HBoton.png');
  MBoton = loadImage('Imagenes/MBoton.png');
  victoria.setLoop(false);
  derrota.setLoop(false);
  fuente = loadFont ('Fuentes/minecraft.ttf');
  
  for (let i = 1; i <= 6; i++) {
    animacionH.push(loadImage('Imagenes/H' + i + '.png')); 
  }
  for (let i = 1; i <= 6; i++) {
    animacionM.push(loadImage('Imagenes/M' + i + '.png')); 
  }
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego(); 
  juego.iniciar(); 
}

function draw() {
    juego.dibujar();
}

function mousePressed() {
    juego.manejarClick(mouseX, mouseY);
}

function keyPressed() {
    juego.manejarTecla(key);
}
