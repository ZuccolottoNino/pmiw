class Jugador{
construct(){
  this.posX;
  this.posY;
  this.movimiento;
  this.colisionJugador;
  this.vida = 10;
  this.velocidad;
  this.jugador = new Jugador();
}

dibujar(){
  this.jugador.dibujar();
  
}

moverJugador(){
}

quitarVida(){
  this.vida = this.vida - 1;
}

}
