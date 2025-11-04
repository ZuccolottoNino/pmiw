class Juego{
construct(){
  this.jugador =new Jugador();
  this.rocas = new [];
  this.cantRocas = 50;
  for (let i=0; i<this.cantRocas; i++){
   this.rocas[i] = new roca();
  }
  
  this.colisionJugador;
  this.movimiento;
  this.movimientoRocas;
  this.restarVida;
  this.sumarVida;
  this.colisionRocas;
}

iniciar(){
}

reiniciar(){
}

dibujar(){
  this.jugador.dibujar();
  this.dibujarRocas();
  this.dibujarRio();
  this.dibujarVida();
}

dibujarRocas(){
    for (let i=0; i<this.cantRocas; i++){
   this.rocas[i] = new roca();
  }
}

dibujarRio(){
}

dibujarVida(){
}

}
