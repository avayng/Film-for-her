let bg;
let y= 0;


var font;

function preload(){
  font= loadFont('fonts/OceansideTypewriter.ttf');
  bg = loadImage('img/film4.jpg');

}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(35);
  background(bg);
 
}

function draw() {
  
//  noStroke();
 // line(0,y-1,width,y-1);
  
 // stroke(226,204,0);
 // line(0,y,width,y);
  
//  y++;
  if (y>height){
    
  }
  

  text('Can we lie here', 800,250);

  text('and look up at the early moon',450,370);
  text('for just a moment longer?',470, 420);
  
  text('a moment longer?',mouseX,mouseY);
  
  if(mouseIsPressed){
    fill('black');
  } else {
    fill(251,244,226);
  }

  
  
  
}

function mousePressed(){
    background(bg);
}