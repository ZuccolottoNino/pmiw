class Juego {
  constructor() {
    this.Jugador = new Jugador();
    this.Rio = new Rio(this.Jugador);
    this.bruja = new Bruja();
    
    this.estadoJuego = 'INICIO'; 
    this.tiempoInicio = 0;
    this.musicaVictoriaSono = false;
    this.musicaDerrotaSono = false;
    
    this.af = imgBorde.height;
    this.m1 = 0;
    this.m2 = -this.af;

    this.inicioPantalla = new Inicio(this.Jugador);
    
    this.botonReiniciar = new Boton(
      width / 2 - 110, 
      height / 2 + 50, 
      220, 
      70, 
      "Reiniciar", 
      'REINICIAR_JUEGO',
      false,
      null
    );
    
    this.tiempoMs = 0;
    this.tiempoTranscurrido = 0;
    this.restante = 0;
    this.seleccion = 'NINGUNO';
    this.personaje = 'H';
  }

  iniciar() {
    this.Jugador.actualizarAnimacion('H'); 
  }
  
  dibujar() {
    background(0, 150, 255);
    textFont(fuente);
    
    if (this.estadoJuego === 'INICIO') {
      this.inicioPantalla.dibujar();
      musica.stop();
      this.musicaVictoriaSono = false;
      this.musicaDerrotaSono = false;
    } else if (this.estadoJuego === 'JUGANDO') {
      this.dibujarJuego();
    } else if (this.estadoJuego === 'GAMEOVER') {
      this.dibujarGameOver();
    } else if (this.estadoJuego === 'GANADO') {
      this.dibujarGanado();
    }
  }

  dibujarFondo() {
    this.m1 = this.m1 + 5;
    this.m2 = this.m2 + 5;
    image(imgBorde, 0, this.m1, 640, 480);
    image(imgBorde, 0, this.m2, 640, 480);
    if (this.m1 >= height) {
      this.m1 = -this.af;
    }
    if (this.m2 >= height) {
      this.m2 = -this.af;
    }
  }

  dibujarJuego() {
    this.tiempoMs = millis() - this.tiempoInicio;
    this.tiempoTranscurrido = floor(this.tiempoMs / 1000);

    if (this.tiempoTranscurrido >= TIEMPO_OBJETIVO) {
      this.estadoJuego = 'GANADO';
      return;
    } 
    
    if (this.Jugador.vida <= 0) {
      this.estadoJuego = 'GAMEOVER';
      return;
    }

    this.dibujarFondo();
    
    this.Jugador.dibujar();
    this.bruja.dibujar();
    this.Rio.dibujar();
    this.dibujarVida();
    this.dibujarTiempo(this.tiempoTranscurrido);
  }

  dibujarVida() {
    fill(255); textSize(24);
    text('Vida: ' + this.Jugador.vida, 45, 30);
  }

  dibujarTiempo(tiempo) {
    fill(255); textSize(24); textAlign(RIGHT, BASELINE);
    this.restante = max(0, TIEMPO_OBJETIVO - tiempo); 
    text('Tiempo: ' + this.restante, width - 45, 30); 
    textAlign(LEFT, BASELINE);
  }
  
  dibujarGameOver() {
    image(imgPerdiste, 0, 0, width, height);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Juego creado por: Zuccolotto Nino y Novoa Simon", 30, height / 2 - 150, 200, 200);
    this.botonReiniciar.dibujar(false); 
    musica.stop();

    if (derrota.isPlaying() == false) {
      if (this.musicaDerrotaSono == false) {
        derrota.play();
        derrota.amp(0.25);
        this.musicaDerrotaSono = true;
      }
    }
  }

  dibujarGanado() {
    image(imgGanaste, 0, 0, width, height);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Escapaste de la bruja", width/2, height/2  - 90);
    textSize(20)
    textAlign(CENTER, BOTTOM);
    text("Juego creado por: Zuccolotto Nino y Novoa Simon", width / 2, height - 20);
    this.botonReiniciar.dibujar(false); 
    musica.stop();
    
    if (victoria.isPlaying() == false) {
      if (this.musicaVictoriaSono == false) {
        victoria.play();
        victoria.amp(0.25);
        this.musicaVictoriaSono = true;
      }
    }
  }

  manejarClick(mx, my) {
    this.seleccion = 'NINGUNO';
    
    if (this.estadoJuego === 'INICIO') {
      this.seleccion = this.inicioPantalla.manejarClick(mx, my);
      if (this.seleccion === 'INICIAR_JUEGO') {
        musica.play();
        userStartAudio();
        this.personaje = this.inicioPantalla.jugadorSeleccionado; 
        this.Jugador.actualizarAnimacion(this.personaje); 
        this.estadoJuego = 'JUGANDO';
        this.tiempoInicio = millis();
      }
    } else if (this.estadoJuego === 'GAMEOVER' || this.estadoJuego === 'GANADO') {
      this.seleccion = this.botonReiniciar.fueClickeado(mx, my);
      if (this.seleccion === 'REINICIAR_JUEGO') {
        this.reiniciarJuego();
      }
    }
  }
  
  manejarTecla(key) {
    if (this.estadoJuego === 'JUGANDO') {
      this.Jugador.moverJugador(key);
      this.bruja.moverBruja(key);
    }
  }
  
  reiniciarJuego() {
    this.Jugador = new Jugador();
    this.Rio = new Rio(this.Jugador);
    this.bruja = new Bruja();
    this.inicioPantalla.resetearSeleccion(this.Jugador);
    this.Jugador.actualizarAnimacion('H'); 
    
    this.estadoJuego = 'INICIO';
    this.m1 = 0;
    this.m2 = -this.af;
    this.musicaVictoriaSono = false;
    this.musicaDerrotaSono = false;
    loop();
  }
}
