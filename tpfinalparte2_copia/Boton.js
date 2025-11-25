class Boton {
  constructor(x, y, w, h, texto, accion, esRedondo, imgBoton) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
    this.accion = accion; 
    this.esRedondo = esRedondo;
    this.imgBoton = imgBoton;
    
    this.radio = 0;
    if (this.esRedondo == true) {
      this.radio = this.w / 2;
    }
    
    this.mouseOver = false;
    this.centroX = 0;
    this.centroY = 0;
    this.estaSobre = false;
    this.resultado = 'NINGUNO';
  }

  dibujar(activo) { 
    this.mouseOver = this.esMouseSobreBoton(mouseX, mouseY);
    
    if (this.esRedondo == true) {
      this.dibujarSelector(activo, this.mouseOver);
    } else {
      this.dibujarRectangular(this.mouseOver);
    }
    
    fill(0);
    textSize(30); 
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.w / 2, this.y + this.h / 2);
  }
  
  dibujarRectangular(mouseOver) { 
    if (this.accion === 'REINICIAR_JUEGO') {
      if (mouseOver == true) {
        fill(255, 200);
      } else {
        fill(200, 200);
      }
      stroke(0);
      strokeWeight(2);
      rect(this.x, this.y, this.w, this.h);
      noStroke();
    } else {
      if (mouseOver == true) {
        fill(200, 255, 0);
      } else {
        fill(255, 255, 0);
      }
      rect(this.x, this.y, this.w, this.h);
    }
  }

  dibujarSelector(activo, mouseOver) { 
    noStroke();
    
    if (activo == true || mouseOver == true) {
        fill(200, 200, 0, 150);
        ellipse(this.x + this.radio, this.y + this.radio, this.w + 10, this.h + 10);
    }
    
    if (this.imgBoton != "") {
      image(this.imgBoton, this.x, this.y, this.w, this.h);
    }
  }

  esMouseSobreBoton(mx, my) { 
    this.estaSobre = false;
    
    if (this.esRedondo == true) {
      this.centroX = this.x + this.radio;
      this.centroY = this.y + this.radio;
      if (dist(mx, my, this.centroX, this.centroY) < this.radio) {
        this.estaSobre = true;
      }
    } else {
      if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
        this.estaSobre = true;
      }
    }
    return this.estaSobre;
  }

  fueClickeado(mx, my) { 
    this.resultado = 'NINGUNO';
    if (this.esMouseSobreBoton(mx, my) == true) {
      this.resultado = this.accion;
    }
    return this.resultado;
  }
}
