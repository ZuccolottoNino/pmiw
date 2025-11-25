class Bruja {
  constructor() {
    this.posY = 440; 
    this.movimiento = 0;
    this.tam = 80;
  }
  dibujar() {
    image(imgBruja, width / 2 + this.movimiento - this.tam / 2, this.posY - this.tam / 2, this.tam, this.tam);
  }
  moverBruja(key) {
    if (key === 'a') {
      this.movimiento = this.movimiento - 80;
    } // Izq
    if (key === 'd') {
      this.movimiento = this.movimiento + 80;
    } // Der
    this.movimiento = constrain(this.movimiento, -240, 240); // Limite
  }
}
