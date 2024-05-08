var pic1;
var pic2;
var pic3;
var arrowKeyPresses = 0 ; 
var font; 


function preload(){
 pic1=loadImage ('img/frontcover.png');
 pic2=loadImage('img/backcover.png');
 pic3=loadImage('img/notebookscan.png');
  font=loadFont('fonts/OceansideTypewriter.ttf');
}



function setup() {
  createCanvas(800, 800);
  textSize(30);
  textFont(font);
}

function draw() {
  background(251,244,226);
  
  
  if (arrowKeyPresses == 1) {
    image(pic1,-150,80,700,500);
  } else if (arrowKeyPresses == 2) { 

       image(pic3, 40,80,700,500);
  } else if(arrowKeyPresses == 3) {
 
    image(pic2,-130,80,700,500);
  }
  
  fill('pink');
  text ('spacebar',300,700) ;
  
  
//     image(pic1,-150,80,700,500);
 // image(pic2,-130,80,700,500);
 //  image(pic3, 40,80,700,500);

    
}
function keyPressed(){
  if (keyCode == 32 && arrowKeyPresses < 3) {
    arrowKeyPresses +=1 ;
  } else if (arrowKeyPresses == 3){
    arrowKeyPresses = 0 ;
  }
  
  print (arrowKeyPresses);     
}