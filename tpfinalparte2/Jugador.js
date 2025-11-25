class Jugador {
  constructor() {
    this.movimiento = 0; 
    this.vida = 3; 
    this.velocidad = 10;
    this.ancho = 80; 
    this.alto = 80;
    this.frameIndex = 0; 
    this.frameRate = 5;
    this.animacionSet = []; 
    
    this.posicionY_3 = 320;
    this.posicionY_2 = 360;
    this.posicionY_1 = 400;
    this.posicionY_0 = 440;
    
    this.colisionJugador_x = 0;
    this.colisionJugador_y = 0;
    this.colisionJugador_radio = 0;
    
    this.temp_posY = 0;
  }

  moverJugador(key) {
    if(key==='a') {
      this.movimiento = this.movimiento - 80; 
    }
    if(key==='d') {
      this.movimiento = this.movimiento + 80; 
    }
    this.movimiento = constrain(this.movimiento, -240, 240); 
  }

  quitarVida() { 
    if (this.vida > 0) {
      this.vida = this.vida - 1;
      golpe.play(); 
    }
  }

  reiniciar() { 
    this.vida = 3; 
    this.movimiento = 0; 
    this.frameIndex = 0; 
  }

  actualizarAnimacion(t) { 
    if (t === 'H') {
      this.animacionSet = animacionH;
    } else {
      this.animacionSet = animacionM;
    }
  } 

  obtenerPosY() {
    this.temp_posY = 0;
    if (this.vida === 3) {
      this.temp_posY = this.posicionY_3;
    } else if (this.vida === 2) {
      this.temp_posY = this.posicionY_2;
    } else if (this.vida === 1) {
      this.temp_posY = this.posicionY_1;
    } else if (this.vida === 0) {
      this.temp_posY = this.posicionY_0;
    }
    return this.temp_posY;
  }
  
  dibujar() {
    this.posX = width / 2; 
    this.posY = this.obtenerPosY();
    
    if (frameCount % this.frameRate === 0) {
      this.frameIndex = (this.frameIndex + 1) % this.animacionSet.length; 
    }

    image(
      this.animacionSet[this.frameIndex],
      this.posX + this.movimiento - this.ancho / 2,
      this.posY - this.alto / 2,
      this.ancho, this.alto
    );

    this.colisionJugador_x = this.posX + this.movimiento;
    this.colisionJugador_y = this.posY;
    this.colisionJugador_radio = this.ancho / 2;
  }
}
