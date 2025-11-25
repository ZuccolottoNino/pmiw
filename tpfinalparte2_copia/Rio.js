class Rio {
  constructor(Jugador) {
    this.Roca = [];
    this.Jugador = Jugador;
    this.cantRocasMax = 7;
    this.tasaAparicionRocas = 40;
    this.randomIndex = 0;
    this.spawnX = 0;
    this.spawnY_nuevo = 0;
    this.minY = 0;
    this.roca = null;
    this.radioJugador = 20;
    this.jugX = 0;
    this.jugY = 0;
    this.distancia = 0;
  }

  dibujar() {
    this.spawnRocas();
    this.dibujarRocas();
    this.chequearColision();
  }

  spawnRocas() {
    if (frameCount % this.tasaAparicionRocas === 0 && this.Roca.length < this.cantRocasMax) {

      // Elige una columna (1 a 7) de forma aleatoria.
      // Las posiciones son 80, 160, ..., 560. Esto es: columna * 80.
      this.columnaAleatoria = floor(random(1, 8)); // random(1, 8) da 1, 2, 3, 4, 5, 6, 7
      this.spawnX = this.columnaAleatoria * 80;

      this.spawnY_nuevo = -80;

      if (this.Roca.length > 0) {

        this.minY_cap = 0;

        for (let i = 0; i < this.Roca.length; i++) {
          if (this.Roca[i].posY < this.minY_cap) {
            this.minY_cap = this.Roca[i].posY;
          }
        }
        this.spawnY_nuevo = this.minY_cap - 80;
      }
      this.Roca[this.Roca.length] = new Roca(this.spawnX, this.spawnY_nuevo);
    }
  }

  dibujarRocas() {
    for (let i = this.Roca.length - 1; i >= 0; i--) {
      this.roca = this.Roca[i];
      this.roca.mover();
      this.roca.dibujar();

      if (this.roca.fueraDePantalla(height)) {
        this.Roca.splice(i, 1);
      }
    }
  }

  chequearColision() {
    this.radioJugador = 20;

    for (let i = this.Roca.length - 1; i >= 0; i--) {
      this.roca = this.Roca[i];

      this.jugX = this.Jugador.colisionJugador_x;
      this.jugY = this.Jugador.colisionJugador_y;

      this.distancia = dist(this.jugX, this.jugY, this.roca.posX, this.roca.posY);

      if (this.distancia < this.radioJugador + this.roca.tam / 2) {
        this.Jugador.quitarVida();
        this.Roca.splice(i, 1);
      }
    }
  }
}
