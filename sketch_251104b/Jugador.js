class Jugador {
  constructor() {
    this.posX = width/2;
      this.posY = 300;
      this.movimiento;
      this.colisionJugador;
      this.vida = 10;
      this.velocidad = 10;
      this.jugador = new Jugador();
  }
  
  dibujar() {
    this.Jugador.dibujar();
    rect(this.posX, this.posY, 30, 50);
  }

  moverJugador() {
  }

  quitarVida() {
    this.vida = this.vida - 1;
  }
}
