class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.rio = new Rio(this.Jugador);
    this.rio.dibujar();
    this.colisionJugador;
    this.movimiento;
    this.movimientoRocas;
    this.restarVida;
    this.sumarVida;
  }

  iniciar() {
  }

  reiniciar() {
  }

  dibujar() {
    this.dibujarRio();
    this.dibujarVida();
    this.chequearColision();
  }

  dibujarRio() {
  }

  dibujarVida() {
  }

  chequearColision() {
    this.rio.chequearColision;
  }
}
