//Video Zuccolotto Nino: https://youtu.be/TqFdMAgFVXk
//Video Novoa Simon: https://youtu.be/8Qgx5tdJKn0
let pasar = 0, mov = 0
  let pasar2=0, negro=0
  let pantalla=[], texto=[], musica
  let inicio
  let trans=255, trans2=255, dir = 3, dir2 = 3
  let colorin
  function setup() {
  createCanvas(640, 480)
    for (let i=0; i<22; i++) {
    pantalla[i] = loadImage("data/p"+(i)+".png")
  }
}

function preload() {
  inicio=loadImage('data/inicio.png')
    texto = loadStrings('data/textos.txt')
    musica = loadSound('data/tema.mp3')
}
function draw() {
  background(100)
    image(inicio, -100-mov, 0, 836, 480)
    image(pantalla[pasar], 0, 0, 836+mov, 480)
    textAlign()
    comenzar()
    pantallas()

    textos()

    if (pasar2==1) {
    fill(0)
      rect(0, 0, 640, 480)
      fill(255,255,0)
      text(texto[32], 120, 220)
      text(texto[33], 140, 260)
      if(mouseX> 280 && mouseX< 280+70 && mouseY> 330 && mouseY< 330+20){
      fill(255)}else{fill(255,255,0)}
      text('<Volver>', 280, 350)
  }
  if(!musica.isPlaying()){
    musica.setLoop(true)
    musica.amp(0.25)
  }
  
  //    fill(0, 255, 255)
   // text(mouseX+','+ mouseY, mouseX, mouseY)
}
function mousePressed() {
  if (pasar<1 && pasar2==0 && mouseX > 525 &&  mouseX < 525+100 && mouseY > 270 && mouseY < 270 +20) {
    pasar=1
      mov=-150
      musica.play()
  }
  if (pasar<1 && mouseX > 525 &&  mouseX < 525+100 && mouseY > 20 && mouseY < 20 +20) {
    pasar2=1
  }
  if(mouseX> 280 && mouseX< 280+70 && mouseY> 330 && mouseY< 330+20){
    pasar2=0
  }
  pantallac()
}

