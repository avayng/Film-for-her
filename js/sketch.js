var font;

function preload(){
  font = loadFont('fonts/Quentin.otf');
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  
  //code was followed from tutorial by Colorful Coding on Youtube//
  
  angleMode(DEGREES);
  textSize(45);
  s1 = createSlider(1,10,5,1).position(20,750);
  p1 = createP('pleasantly lost: ').position(20,710);
  s2 = createSlider(2,8,5,1).position(200,750);
  p2 = createP('a').position(200,710);
  s3 = createSlider(3,30,3,1).position(400,750);
  p3 = createP('... daydream').position(400,710);
  
}

function draw() {
  background(251,244,226);
  strokeWeight(2);
  textSize(180);
  text('Reverie :',height/4, 190);
  
  textSize(40);
  text('Orion Carloto',1100, 600);
  
  translate(width/2, height/2);
  
  
  noFill();
  
  strokeWeight(8);
  
  for (var n = 0; n < s1.value(); n++){
    
  stroke(150 + n * 20, 150 + n * 5, 200);
  beginShape();
  for (var i =0; i < 360; i+=s3.value()){
      var rad = map(sin(i*s2.value() + frameCount), -1, 1, 100,200);
      var x = rad * cos(i);
      var y = rad * sin(i);
    vertex(x,y);
    
    
    
  }
  endShape(CLOSE);
    rotate(frameCount/12);
  }
} 