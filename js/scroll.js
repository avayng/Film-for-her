var ex1;
var ex2;
var ex3;
var font;


function preload(){
 ex1=loadImage('img/ex1.jpg');
 ex2=loadImage('img/ex2.jpg');
 ex3=loadImage('img/palm tree.jpg');
 font = loadFont("fonts/OceansideTypewriter.ttf");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont (font);
  textSize(25);


}

function draw() {
  background(251, 244, 226);
  
  //stroke('white'); 
  noStroke();
  rect(350,55,700,800);


  //noStroke();
  if(mouseX < width/3){
    
     image(ex1,400,100,600,600);
    
    // fill(255,0,0);
    // text('one',20,width/3);
  } 
  
  else if (mouseX> width/3 && mouseX < 2* width/3){
    
       image(ex2,400,100,600,600);

//     fill(0,0,225);
//     text('two',180,width/3);
    }
  
  else {
       image(ex3,400,100,600,600);

 
    }

    text ('Reverie?',40,700);
    text (" :lost in one's thoughts; a daydream",60,740);
    
    
    
    
}