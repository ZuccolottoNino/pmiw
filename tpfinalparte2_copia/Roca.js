class Roca {
  constructor(x, y) {
    this.tam = 80; 
    this.velocidad = 5;
    this.posX = x; 
    this.posY = y;
  }
  
  mover() { 
    this.posY = this.posY + this.velocidad; 
  }
  
  fueraDePantalla(h) { 
    return this.posY > h + this.tam; 
  } 

  dibujar() {
    image(imgRoca,this.posX - this.tam / 2,this.posY - this.tam / 2,this.tam, this.tam);
  }
}
