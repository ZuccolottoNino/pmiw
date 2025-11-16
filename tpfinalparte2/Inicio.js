class Inicio {
  constructor() {
    this.rectW = 200;
    this.rectH = 80;
    this.rectX = width / 2 - this.rectW / 2;
    this.rectY = height / 2 + 50;
    this.radioBoton = 30;
  this.posBotonH = {x:
  width / 2 - 80, y:
    this.rectY + this.rectH + 80
  };
this.posBotonM = {x:
width / 2 + 80, y:
  this.rectY + this.rectH + 80
};
this.jugadorSeleccionado = 'H';
}
dibujar() {
  if (this.jugadorSeleccionado === 'H') {
    image(fondoH, 0, 0, width, height)
  } else {
    image(fondoM, 0, 0, width, height)
  }
  fill(255); // Color blanco para el texto
  textSize(20); // Tamaño de la fuente
  textAlign(LEFT, TOP); // Alineación a la izquierda y arriba
  text("Muevete hacia los costados con A y D\npara esquivar las rocas.", 20, 100); // Posición (20, 20)

  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("ESQUIVA LAS ROCAS", width / 2, 40);
  this.dibujarBotonJugar();
  fill(255);
  textSize(20);
  text("Elegi Personaje", width / 2, this.rectY + this.rectH + 35);
  this.dibujarSelector(this.posBotonH.x, this.posBotonH.y, 'H', HBoton, this.jugadorSeleccionado === 'H');
  this.dibujarSelector(this.posBotonM.x, this.posBotonM.y, 'M', MBoton, this.jugadorSeleccionado === 'M');
}

dibujarBotonJugar() {
  fill((mouseX > this.rectX && mouseX < this.rectX + this.rectW && mouseY > this.rectY && mouseY < this.rectY + this.rectH)
    ? 200 : 255, 255, 0);
  rect(this.rectX, this.rectY, this.rectW, this.rectH);
  fill(0);
  textSize(36);
  text("JUGAR", width / 2, this.rectY + this.rectH / 2);
}

dibujarSelector(x, y, nombre, imgBoton, activo) {
  noStroke();
  fill(50);
  image(imgBoton, x-30, y-30, this.radioBoton *2)
    fill(255);
  textSize(30);
  text(nombre, x, y);
}

fueClickeado(mx, my) {
  if (mx > this.rectX && mx < this.rectX + this.rectW && my > this.rectY && my < this.rectY + this.rectH) {
    return 'INICIAR_JUEGO'
  }

  if (dist(mx, my, this.posBotonH.x, this.posBotonH.y) < this.radioBoton) {
    this.jugadorSeleccionado = 'H';
    return 'H';
  }

  if (dist(mx, my, this.posBotonM.x, this.posBotonM.y) < this.radioBoton) {
    this.jugadorSeleccionado = 'M';
    return 'M';
  }
  return 'NINGUNO';
}
}
