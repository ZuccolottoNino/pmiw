function comenzar() {
  if(pasar<1 && pasar2==0){
  trans -= dir;
  
   if (trans >= 255 || trans <= 0){
     dir*=-1;
     
   }
   if(mouseX > 525 &&  mouseX < 525+100 && mouseY > 270 && mouseY < 270 +20){
     trans=255
     colorin = color(255,255,255)
   }else {colorin = color(255,255,0, trans)}
    //rect(525,34, 100, 20)
    fill(colorin)
    textFont('Arial-ItalicMT-48', 20)
    strokeWeight(4)
    stroke(0, trans)
    text('Comenzar >', 525, 290)
  }
    if(pasar<1){
    trans2 -= dir2;
  
   if (trans2 >= 255 || trans2 <= 0){
     dir2*=-1;
     
   }
   if(mouseX > 525 &&  mouseX < 525+100 && mouseY > 20 && mouseY < 20 +20){
     trans2=255
     colorin = color(255,255,255)
   }else {colorin = color(255,255,0, trans2)}
    fill(colorin)
    textFont('Arial-ItalicMT-48', 20)
    strokeWeight(4)
    stroke(0, trans2)
    text('Creditos >', 525, 40)
  }
}
