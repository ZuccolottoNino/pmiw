class Rio {
  constructor(Jugador) {
    this.Roca = []; 
    this.Jugador = Jugador;
    this.cantRocasMax = 7; 
    this.tasaAparicionRocas = 40;
    this.posPermitidas = [80, 160, 240, 320, 400, 480, 560]; 
  }
  
  dibujar() {
    this.spawnRocas();
    this.dibujarRocas();
    this.chequearColision();
  }

  spawnRocas() {
    if (frameCount % this.tasaAparicionRocas === 0 && this.Roca.length < this.cantRocasMax) {
        
        //Elegir una posición X aleatoria de la lista
        let randomIndex = floor(random(this.posPermitidas.length));
        let spawnX = this.posPermitidas[randomIndex]; 
        
        //Definir la posición Y de aparición (separación vertical)
        let spawnY = -80; 
        
        if (this.Roca.length > 0) {
            // Encuentra la más alta en posición Y entre todas las rocas
            let rocaAltaY = this.Roca.reduce((minY, roca) => min(minY, roca.posY), 0); //busca la roca con la posición Y mas chica en la pantalla.
            
            // La nueva roca aparece 80 mas arriba
            spawnY = rocaAltaY - 80; 
        }

        this.Roca.push(new Roca(spawnX, spawnY)); 
    }
  }

  dibujarRocas() {
    for (let i = this.Roca.length - 1; i >= 0; i--) {
      let roca = this.Roca[i]; 
      roca.mover();
      roca.dibujar();

      if (roca.fueraDePantalla(height)) {
        this.Roca.splice(i, 1);  //splice elimina un elemento de un arreglo
      }
    }
  }

  chequearColision() {
    let radioJugador = 20;
    
    for (let i = this.Roca.length - 1; i >= 0; i--) {
      let roca = this.Roca[i];
      let distancia = dist(this.Jugador.colisionJugador.x, this.Jugador.colisionJugador.y, roca.posX, roca.posY);
      
      if (distancia < radioJugador + roca.tam / 2) { 
        this.Jugador.quitarVida();
        this.Roca.splice(i, 1); //splice elimina un elemento de un arreglo
      }
    }
  }
}
