var ex1;
var ex2;
var ex3;


function preload(){
 ex1=loadImage('img/ex1.jpg');
 ex2=loadImage('img/ex2.jpg');
 ex3=loadImage('img/palm tree.jpg');
}


function setup() {
  createCanvas(800, 800);
  textSize(30);


}

function draw() {
  background('white');
  
  if(mouseX < width/3){
    
     image(ex1,100,100,600,600);
    
    // fill(255,0,0);
    // text('one',20,width/3);
  } 
  
  else if (mouseX> width/3 && mouseX < 2* width/3){
    
       image(ex2,100,100,600,600);

//     fill(0,0,225);
//     text('two',180,width/3);
    }
  
  else {
       image(ex3,100,100,600,600);

 
    }

    text ('text',60,60);
    
    
    
    
}