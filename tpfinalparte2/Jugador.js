class Jugador {
  constructor() {
    this.movimiento = 0; this.vida = 3; this.velocidad = 10;
    this.ancho = 80; this.alto = 80;
    this.frameIndex = 0; this.frameRate = 5;
    this.animacionSet = animacionH;
    this.posicionesY = { 3:320, 2:360, 1:400, 0:440 }; //Retroceder al chocar con roca
  }

  moverJugador(key) {
    if(key==='a') this.movimiento -= 80; // Izq
    if(key==='d') this.movimiento += 80; // Der
    this.movimiento = constrain(this.movimiento, -240, 240); // constrain limita los valores en un rango determinado
  }

  quitarVida() { if (this.vida > 0) this.vida--; golpe.play(); } // Reducir vida

  reiniciar() { this.vida = 3; this.movimiento = 0; this.frameIndex = 0; }

  actualizarAnimacion(t) { this.animacionSet = (t === 'H') ? animacionH : animacionM; } 

  dibujar() {
    this.posX = width / 2; this.posY = this.posicionesY[this.vida];
    
    if (frameCount % this.frameRate === 0)
      this.frameIndex = (this.frameIndex + 1) % this.animacionSet.length; // Avanzar frame en la animacion cada 5 frames

    image(
      this.animacionSet[this.frameIndex],
      this.posX + this.movimiento - this.ancho / 2,
      this.posY - this.alto / 2,
      this.ancho, this.alto
    );

    this.colisionJugador = { x: this.posX + this.movimiento, y: this.posY, radio: this.ancho / 2 }; // Hitbox
  }
}
