class Juego {
  constructor() {
    this.Jugador = new Jugador();
    this.Rio = new Rio(this.Jugador);
    this.bruja = new Bruja();
  }

  iniciar() {}
  
  dibujar(tiempo) {
    this.Jugador.dibujar();
    this.bruja.dibujar();
    this.Rio.dibujar();
    this.dibujarVida();
    this.dibujarTiempo(tiempo);
  }

  dibujarVida() {
    fill(255); textSize(24);
    text('Vida: ' + this.Jugador.vida, 45, 30);
  }

  dibujarTiempo(tiempo) {
    fill(255); textSize(24); textAlign(RIGHT, BASELINE);
    let restante = max(0, TIEMPO_OBJETIVO - tiempo); // No bajar de 0
    text('Tiempo: ' + restante, width - 45, 30); // Cronómetro
    textAlign(LEFT, BASELINE);
  }
  
}
