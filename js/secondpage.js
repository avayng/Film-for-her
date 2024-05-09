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
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  textFont(font);
}

function draw() {
  background(251,244,226);
  
  
  if (arrowKeyPresses == 1) {
    image(pic1,width/4,80,700,500);
  } else if (arrowKeyPresses == 2) { 

       image(pic3, width/4,80,700,500);
  } else if(arrowKeyPresses == 3) {
 
    image(pic2,width/4,80,700,500);
  }
  
  fill(67,133,137);
  text ('(press spacebar)',width/2,800) ;
  
  
//     image(pic1,-150,80,700,500);
 // image(pic2,-130,80,700,500);
 //  image(pic3, 40,80,700,500);

 //fill(67,133,137);
 //  fill(145,84,115);
  // fill(243,202,218);

    
}
function keyPressed(){
  if (keyCode == 32 && arrowKeyPresses < 3) {
    arrowKeyPresses +=1 ;
  } else if (arrowKeyPresses == 3){
    arrowKeyPresses = 0 ;
  }
  
  print (arrowKeyPresses);     
}