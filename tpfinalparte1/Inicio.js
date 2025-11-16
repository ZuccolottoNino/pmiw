function comenzar(posXComenzar, posYComenzar, posXCreditos, posYCreditos) {
  if(pasar<1 && pasar2==0){
    trans -= dir;
    
    if (trans >= 255 || trans <= 0){
      dir*=-1;
      
    }
    if(mouseX > posXComenzar &&  mouseX < posXComenzar+100 && mouseY > posYComenzar && mouseY < posYComenzar +20){
      trans=255
      colorin = color(255,255,255)
    }else {colorin = color(255,255,0, trans)}
    //rect(525,34, 100, 20)
    fill(colorin)
    textFont('Arial-ItalicMT-48', 20)
    strokeWeight(4)
    stroke(0, trans)
    text('Comenzar >', posXComenzar, posYComenzar+20)
  }
  if(pasar<1){
    trans2 -= dir2;
    
    if (trans2 >= 255 || trans2 <= 0){
      dir2*=-1;
      
    }
    if(mouseX > posXCreditos &&  mouseX < posXCreditos+100 && mouseY > posYCreditos && mouseY < posYCreditos +20){
      trans2=255
      colorin = color(255,255,255)
    }else {colorin = color(255,255,0, trans2)}
    fill(colorin)
    textFont('Arial-ItalicMT-48', 20)
    strokeWeight(4)
    stroke(0, trans2)
    text('Creditos >', posXCreditos, posYCreditos+20)
  }
}
