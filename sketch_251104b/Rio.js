class Rio {
  constructor(Jugador) {
    this.Roca = []
      this.Jugador = Jugador;
    this.fondo;
    this.cantRocas = 50;
    for (let i=0; i<this.cantRocas; i++) {
      this.Roca[i] = new Roca();
      this.colisionRocas;
    }
  }

  dibujar() {
    this.dibujarRocas()
      this.Jugador.dibujar()
  }

  dibujarRocas() {
    for (let i=0; i<this.cantRocas; i++) {
      this.Roca[i].dibujar();
    }
  }
  chequearColision() {

    for (let i=0; i<this.cantRocas; i++) {
      if (dist(this.Roca[i], this.Jugador)) {
        this.Jugador.quitarVida()
      }
    }
  }
}
