function pantallac() {
  //Seguir__________
  if (pasar>=1 && pasar<5|| pasar>5 && pasar<8||pasar>9 && pasar<12||pasar>12&&pasar<16||pasar>18 && pasar<21)
  {
    if (mouseX > 525 &&  mouseX < 525+100 && mouseY > 410 && mouseY < 410 +30) {
      pasar++
    }
  }
  if (pasar==18) {
    if (mouseX > 525 &&  mouseX < 525+100 && mouseY > 410 && mouseY < 410 +30) {
      pasar=20
      
    }
  }
  //______________________
  if (pasar==5) {
    //A
    if (mouseX > 525 &&  mouseX < 525+100 && mouseY > 140 && mouseY < 140 +60) {
      pasar=10
      
    }
    //B
    if (mouseX > 525 &&  mouseX < 525+100 && mouseY > 340 && mouseY < 340 +60) {
      pasar=6
      
    }
  }
  //______________________
  if (pasar==8) {
    //A
    if (mouseX > 525 &&  mouseX < 525+100 && mouseY > 140 && mouseY < 140 +60) {
      pasar=9
      
    }
    //B
    if (mouseX > 525 &&  mouseX < 525+100 && mouseY > 340 && mouseY < 340 +60) {
      pasar=16
      
    }
  }
  //___________________
  if (pasar==16) {
    //A
    if (mouseX > 525 &&  mouseX < 525+100 && mouseY > 140 && mouseY < 140 +60) {
      pasar=17
      
    }
    //B
    if (mouseX > 525 &&  mouseX < 525+100 && mouseY > 250 && mouseY < 250 +60) {
      pasar=18
      
    }
  }
  //________________
  if (pasar==12) {
    //A
    if (mouseX > 525 &&  mouseX < 525+100 && mouseY > 140 && mouseY < 140 +60) {
      pasar=13
      
    }
    //B
    if (mouseX > 525 &&  mouseX < 525+100 && mouseY > 340 && mouseY < 340 +60) {
      pasar=19
      
    }
  }
  if(pasar==17||pasar==9||pasar==21){
    if (mouseX > 525 &&  mouseX < 525+100 && mouseY > 220 && mouseY < 220 +30) {
      pasar=0
      mov=0
      musica.stop()
    }
  }
}
