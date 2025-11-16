function pantallas(estadoActual){
  if(estadoActual>=1 && estadoActual<5|| estadoActual>5 && estadoActual<8||estadoActual>9 && estadoActual<12||estadoActual>12&&estadoActual<16||estadoActual>=18 && estadoActual<21){
    trans -= dir;
    
    if (trans >= 255 || trans <= 0){
      dir*=-1;
      
    }
    if(mouseX > 525 &&  mouseX < 525+100 && mouseY > 410 && mouseY < 410 +30){
      trans=255
      colorin = color(255,255,255)
    }else {colorin = color(255,255,0, trans)}
    fill(colorin)
    textFont('Arial-ItalicMT-48', 30)
    strokeWeight(4)
    stroke(0, trans)
    text('Seguir >', 525, 440)
  }
  //__________BOTON A_____________
  if(estadoActual==5||estadoActual==8||estadoActual==12||estadoActual==16){
    trans -= dir;
    if (trans >= 255 || trans <= 0){
      dir*=-1;
    }
    if(mouseX > 525 &&  mouseX < 525+100 && mouseY > 140 && mouseY < 140 +60){
      trans=255
      colorin = color(255,255,255)
    }else {colorin = color(255,255,0, trans)}
    fill(colorin)
    textFont('Arial-ItalicMT-48', 20)
    strokeWeight(4)
    stroke(0, trans)
    if(estadoActual==5){text(texto[24], 525, 140,100)}
    if(estadoActual==8){text(texto[25], 525, 140,100)}
    if(estadoActual==12){text(texto[28], 525, 140,100)}
    if(estadoActual==16){text(texto[29], 525, 140,125)}
  }
  //_______BOTON B_____________
  if(estadoActual==5||estadoActual==8||estadoActual==12){
    trans2 -= dir2;
    if (trans2 >= 255 || trans2 <= 0){
      dir2*=-1;
    }
    if(mouseX > 525 &&  mouseX < 525+100 && mouseY > 340 && mouseY < 340 +60){
      trans2=255
      colorin = color(255,255,255)
    }else {colorin = color(255,255,0, trans2)}
    fill(colorin)
    textFont('Arial-ItalicMT-48', 20)
    strokeWeight(4)
    stroke(0, trans2)
    if(estadoActual==5){text(texto[23], 525, 340,100)}
    if(estadoActual==8){text(texto[26], 525, 340,100)}
    if(estadoActual==12){text(texto[27], 525, 340,125)}
  }
  
  if(estadoActual==16){
    trans2 -= dir2;
    if (trans2 >= 255 || trans2 <= 0){
      dir2*=-1;
    }
    if(mouseX > 525 &&  mouseX < 525+100 && mouseY > 250 && mouseY < 250 +60){
      trans2=255
      colorin = color(255,255,255)
    }else {colorin = color(255,255,0, trans2)}
    fill(colorin)
    textFont('Arial-ItalicMT-48', 20)
    strokeWeight(4)
    stroke(0, trans2)
    text(texto[30], 525, 240,125)
  }
  
  if(estadoActual==17||estadoActual==9||estadoActual==21){
    trans -= dir;
    
    if (trans >= 255 || trans <= 0){
      dir*=-1;
      
    }
    if(mouseX > 525 &&  mouseX < 525+100 && mouseY > 220 && mouseY < 220 +30){
      trans=255
      colorin = color(255,255,255)
    }else {colorin = color(255,255,0, trans)}
    fill(colorin)
    textFont('Arial-ItalicMT-48', 30)
    strokeWeight(4)
    stroke(0, trans)
    text('Inicio >', 525, height/2)
  }
}
