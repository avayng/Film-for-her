var font;
var img;

function preload(){
  font= loadFont('fonts/OceansideTypewriter.ttf');
  img = loadImage('img/drink.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(45);
  noCursor();
  imageMode(CENTER);
}

function draw() {
  background(251,244,226);
  
  fill(67,133,137);
//  fill(145,84,115);
 // fill(243,202,218);
  
  text('An abundance of affection',400,50);
  fill(145,84,115);
  text('An abundance of affection',404,50);
  text('An abundance of affection',400,58);
  fill(67,133,137);
  text('An abundance of affection',400,65);
  text('An abundance of affection',400,85);
  text('An abundance of affection',400,105);
  text('An abundance of affection',400,125);
  text('An abundance of affection',400,145);
  
  
  
  text('can feel intoxicating, too,', 330,230);
  text('intoxicating,', 750,290);
  fill(145,84,115);
  text('intoxicating,', 770,300);
  fill(243,202,218);
  text('intoxicating,', 790,310);
  fill(67,133,137);
  text('intoxicating,', 910,320);
  fill(145,84,115);
  text('intoxicating,', 930,330);
  fill(243,202,218);
  text('intoxicating,', 950,340);
  fill(67,133,137);
  text('intoxicating,', 970,350);
  fill(145,84,115);
  text('intoxicating,', 990,360);
  fill(243,202,218);
  text('intoxicating,', 1210,370);
  fill(67,133,137);
  text('intoxicating,', 1230,380);
  fill(145,84,115);
  text('intoxicating,', 1250,390);

 
  text('even the afternoon sun refuses to hide behind',200,400);
  text("yesterday's rain clouds.",300,420);
  text("An arbitrary prelude to a winter",300,440);
  fill(243,202,218);
  text("that's already begun planting",600, 452);
  fill(145,84,115);
  text('seeds of despair',300,520);
  text('in the corners of my judgement.',900,540);
  
  noStroke();
  fill(251,244,226);
  circle(mouseX,mouseY,950);
  fill(145,84,115);
  textSize(20);
  text('"pleasantly lost"',mouseX,mouseY);
  textAlign(CENTER);

//  image(img,mouseX,mouseY,200,200);
  
  
}