class Roca {
  constructor(x, y) {
    this.tam = 80; this.velocidad = 5;
    this.posX = x; this.posY = y;
  }
  
  mover() { this.posY += this.velocidad; } //movimiento rocas cayendo
  
  fueraDePantalla(h) { return this.posY > h + this.tam; } //fuera de pantalla

  dibujar() {
    image(imgRoca,this.posX - this.tam / 2,this.posY - this.tam / 2,this.tam, this.tam);
  }
}
