class Inicio {
  constructor(Jugador) {
    this.rectW = 200;
    this.rectH = 80;
    this.rectX = width / 2 - this.rectW / 2;
    this.rectY = height / 2 + 50;
    this.radioBoton = 30;
    this.jugadorSeleccionado = 'H';
    this.Jugador = Jugador;

    this.posH_x = width / 2 - 80;
    this.posH_y = this.rectY + this.rectH + 80;
    this.posM_x = width / 2 + 80;
    this.posM_y = this.rectY + this.rectH + 80;

    this.botonJugar = new Boton(
      this.rectX, this.rectY, this.rectW, this.rectH,
      "JUGAR",
      'INICIAR_JUEGO',
      false
      );

    this.selectorH = new Boton(
      this.posH_x - this.radioBoton, this.posH_y - this.radioBoton, this.radioBoton * 2, this.radioBoton * 2,
      'H',
      'SELECCION_H',
      true,
      HBoton
      );

    this.selectorM = new Boton(
      this.posM_x - this.radioBoton, this.posM_y - this.radioBoton, this.radioBoton * 2, this.radioBoton * 2,
      'M',
      'SELECCION_M',
      true,
      MBoton
      );

    this.resultado = 'NINGUNO';
    this.esH = false;
    this.esM = false;
  }

  dibujar() {
    if (this.jugadorSeleccionado === 'H') {
      image(fondoH, 0, 0, width, height)
    } else {
      image(fondoM, 0, 0, width, height)
    }

    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Muevete hacia los costados con A y D\npara esquivar las rocas.", 20, 100);

    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("ESQUIVA LAS ROCAS", width / 2, 40);

    this.botonJugar.dibujar(false);

    fill(255);
    textSize(20);
    text("Elegi Personaje", width / 2, this.rectY + this.rectH + 35);

    this.esH = false;
    this.esM = false;
    if (this.jugadorSeleccionado === 'H') {
      this.esH = true;
    } else {
      this.esM = true;
    }

    this.selectorH.dibujar(this.esH);
    this.selectorM.dibujar(this.esM);
  }

  manejarClick(mx, my) {
    this.resultado = 'NINGUNO';

    this.resultado = this.botonJugar.fueClickeado(mx, my);
    if (this.resultado === 'INICIAR_JUEGO') {
      return this.resultado;
    }

    this.resultado = this.selectorH.fueClickeado(mx, my);
    if (this.resultado === 'SELECCION_H') {
      this.jugadorSeleccionado = 'H';
      return 'H';
    }

    this.resultado = this.selectorM.fueClickeado(mx, my);
    if (this.resultado === 'SELECCION_M') {
      this.jugadorSeleccionado = 'M';
      return 'M';
    }
    return 'NINGUNO';
  }

  resetearSeleccion(nuevoJugador) {
    this.jugadorSeleccionado = 'H';
    this.Jugador = nuevoJugador;
  }
}
