//https://youtu.be/qfwG3X5HLAE
let juego;
let inicio;
let imgBorde, m1=0, m2, af, imgRoca; //imgBorde(borde de la imagen del fondo) m1(movimiento1) m2(movimiento2) af(alturaFondo)
let imgBruja;
let estadoJuego = 'INICIO'; //ESTADOS:INICIO,JUGANDO,GAMEOVER,GANADO
let tiempoInicio;
const TIEMPO_OBJETIVO = 30;
let animacionH = [];
let animacionM = [];
let fondoH, fondoM;
let imgGanaste;
let imgPerdiste;
let botonReiniciarX;
let botonReiniciarY;
let musicaVictoriaSono = false;
let musicaDerrotaSono = false;
let fuente;
let HBoton, MBoton;
function setup() {
  createCanvas(640, 480);

  juego = new Juego();
  inicio = new Inicio();

  juego.iniciar();
  //loop del fondo
  af = imgBorde.height;
  m2 = -af;

  botonReiniciarX = width / 2 - 110;
  botonReiniciarY = height / 2 + 50;
}
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
  //ARREGLO ANIMACIÓN DEL JUGADOR H
  for (let i = 1; i <= 6; i++) {
    animacionH.push(loadImage('Imagenes/H' + i + '.png')); //se usa push para agregar todas las animaciones al finala del arreglo
  }
  //ARREGLO ANIMACIÓN DEL JUGADOR M
  for (let i = 1; i <= 6; i++) {
    animacionM.push(loadImage('Imagenes/M' + i + '.png')); //se usa push para agregar todas las animaciones al final del arreglo
  }
}
function draw() {
  background(0, 150, 255);
  textFont(fuente)
    if (estadoJuego === 'INICIO') {
    inicio.dibujar();
    musica.stop()
  } else if (estadoJuego === 'JUGANDO') {
    let tiempoTranscurrido = floor((millis() - tiempoInicio) / 1000); //tiempo en segundos redondeado
    if (tiempoTranscurrido >= TIEMPO_OBJETIVO) {
      estadoJuego = 'GANADO';
    } else if (juego.Jugador.vida <= 0) {
      estadoJuego = 'GAMEOVER';
    } else {       // Animación del fondo
      m1 = m1 + 5;
      m2 = m2 + 5;
      image(imgBorde, 0, m1, 640, 480);
      image(imgBorde, 0, m2, 640, 480);
      if (m1 >= height) {
        m1 = -af;
      }
      if (m2 >= height) {
        m2 = -af;
      }
      juego.dibujar(tiempoTranscurrido);
    }
  } else if (estadoJuego === 'GAMEOVER') {     // Pantalla de Game Over
    image(imgPerdiste, 0, 0, width, height);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    musica.stop()
      textSize(20);
    text("Juego creado por: Zuccolotto Nino y Novoa Simon", 30, height / 2 - 150, 200, 200);
    dibujarBotonReiniciar();
  } else if (estadoJuego === 'GANADO') {     // Pantalla de Victoria
    image(imgGanaste, 0, 0, width, height);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Escapaste de la bruja", width/2, height/2  - 90);
    textSize(20)
    textAlign(CENTER, BOTTOM);
    text("Juego creado por: Zuccolotto Nino y Novoa Simon", width / 2, height - 20);
    musica.stop()
      dibujarBotonReiniciar();
  }
  if (estadoJuego === 'GANADO') {
    if (!victoria.isPlaying() && musicaVictoriaSono == false) {
      victoria.play();
      victoria.amp(0.25);
      musicaVictoriaSono = true
    }
  }

  if (estadoJuego === 'GAMEOVER') {
    if (!derrota.isPlaying() && musicaDerrotaSono == false) {
      derrota.play();
      derrota.amp(0.25);
      musicaDerrotaSono = true
    }
  }
}

function dibujarBotonReiniciar() {
  if (mouseX > botonReiniciarX && mouseX < botonReiniciarX + 220 &&
    mouseY > botonReiniciarY && mouseY < botonReiniciarY + 70) {
    fill(255, 200);
  } else {
    fill(200, 200, 200, 200);
  }
  stroke(0);
  strokeWeight(2);
  rect(botonReiniciarX, botonReiniciarY, 220, 70);
  fill(0);
  noStroke();
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Reiniciar", width / 2, botonReiniciarY + 35);
}
function keyPressed() {
  if (estadoJuego === 'JUGANDO') {
    juego.Jugador.moverJugador(key);
    juego.bruja.moverBruja(key);
  }
}
function mousePressed() {
  if (estadoJuego === 'INICIO') {
    let seleccion = inicio.fueClickeado(mouseX, mouseY);
    if (seleccion === 'INICIAR_JUEGO') {
      musica.play()
        userStartAudio()
        juego.Jugador.actualizarAnimacion(inicio.jugadorSeleccionado);
      estadoJuego = 'JUGANDO';
      tiempoInicio = millis();
    }
  } else if (estadoJuego === 'GAMEOVER' || estadoJuego === 'GANADO') {
    if (mouseX > botonReiniciarX && mouseX < botonReiniciarX + 220 &&
      mouseY > botonReiniciarY && mouseY < botonReiniciarY + 70) {
      reiniciarJuego();
    }
  }
}
function reiniciarJuego() {
  juego = new Juego();
  inicio = new Inicio();
  estadoJuego = 'INICIO';
  musicaVictoriaSono = false;
  musicaDerrotaSono = false;
  loop();
}
