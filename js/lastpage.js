var arrowKeyPresses = 0;
var font;
var photos;
var wine;
var car;
var hands;
var boots;
var us;
var road;
var tree;
var malibu;

function preload() {
  font = loadFont("fonts/OceansideTypewriter.ttf");
  photos = loadImage("img/photos.jpg");
  wine = loadImage("img/wine.png");
  car = loadImage("img/cars.png");
  hands = loadImage("img/hands.png");
  boots = loadImage("img/boots.png");
  us = loadImage("img/us.png");
  road = loadImage("img/road.png");
  tree = loadImage("img/treeatnight.png");
  malibu = loadImage("img/malibu.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(25);
}

function draw() {
  background(251, 244, 226);

  fill(67,133,137);
  fill(145, 84, 115);
  fill(243,202,218);


  text("A dalliance with a scene doomed from the start. ",150, 50);

  text("Another one of my early years spent with you. ", 100, 70);

  fill("white");

  if (arrowKeyPresses == 1) {
    image(photos, width*(1/7), height*(5/70), width / 9, width / 9);
  } else if (arrowKeyPresses == 2) {
    image(photos, width*(1/7), height*(5/70), width / 9, width / 9);
    image(wine,width*(3/7),height*(5/70), width / 9, width / 9);
  } else if (arrowKeyPresses == 3) {
    image(photos, width*(1/7), height*(5/70), width / 9, width / 9);
    image(wine,width*(3/7),height*(5/70), width / 9, width / 9);
    image(car,width*(5/7), height*(5/70), width / 9, width / 9);
  } else if (arrowKeyPresses == 4) {
    image(photos, width*(1/7),height*(5/70), width / 9, width / 9);
    image(wine,width*(3/7),height*(5/70), width / 9, width / 9);
    image(car,width*(5/7), height*(5/70), width / 9, width / 9);
    image(hands, width*(1/7),height*(25/70), width / 9, width / 9);
  } else if (arrowKeyPresses == 5) {
    image(photos, width*(1/7),height*(5/70), width / 9, width / 9);
    image(wine,width*(3/7),height*(5/70), width / 9, width / 9);
    image(car,width*(5/7), height*(5/70), width / 9, width / 9);
    image(hands, width*(1/7),height*(25/70), width / 9, width / 9);
    image(boots,width*(3/7),height*(25/70), width / 9, width / 9);
  } else if (arrowKeyPresses == 6) {
    image(photos, width*(1/7),height*(5/70), width / 9, width / 9);
    image(wine,width*(3/7),height*(5/70), width / 9, width / 9);
    image(car,width*(5/7), height*(5/70), width / 9, width / 9);
    image(hands, width*(1/7),height*(25/70), width / 9, width / 9);
    image(boots,width*(3/7),height*(25/70), width / 9, width / 9);
    image(us,width*(5/7), height*(25/70), width / 9, width / 9);
  } else if (arrowKeyPresses == 7) {
    image(photos, width*(1/7),height*(5/70), width / 9, width / 9);
    image(wine,width*(3/7),height*(5/70), width / 9, width / 9);
    image(car,width*(5/7), height*(5/70), width / 9, width / 9);
    image(hands, width*(1/7),height*(25/70), width / 9, width / 9);
    image(boots,width*(3/7),height*(25/70), width / 9, width / 9);
    image(us,width*(5/7), height*(25/70), width / 9, width / 9);
    image(road, width*(1/7),height*(5/7), width / 9, width / 9);
  } else if (arrowKeyPresses == 8) {
    image(photos, width*(1/7),height*(5/70), width / 9, width / 9);
    image(wine,width*(3/7),height*(5/70), width / 9, width / 9);
    image(car,width*(5/7), height*(5/70), width / 9, width / 9);
    image(hands, width*(1/7),height*(25/70), width / 9, width / 9);
    image(boots,width*(3/7),height*(25/70), width / 9, width / 9);
    image(us,width*(5/7), height*(25/70), width / 9, width / 9);
    image(road, width*(1/7),height*(5/7), width / 9, width / 9);
    image(tree,width*(3/7),height*(5/7), width / 9, width / 9);
  } else if (arrowKeyPresses == 9) {
    image(photos, width*(1/7),height*(5/70), width / 9, width / 9);
    image(wine,width*(3/7),height*(5/70), width / 9, width / 9);
    image(car,width*(5/7), height*(5/70), width / 9, width / 9);
    image(hands, width*(1/7),height*(25/70), width / 9, width / 9);
    image(boots,width*(3/7),height*(25/70), width / 9, width / 9);
    image(us,width*(5/7), height*(25/70), width / 9, width / 9);
    image(road, width*(1/7),height*(5/7), width / 9, width / 9);
    image(tree,width*(3/7),height*(5/7), width / 9, width / 9);
    image(malibu,width*(5/7), height*(5/7), width / 9, width / 9);
  }
}

function keyPressed() {
  if (keyCode == 39 && arrowKeyPresses < 9) {
    arrowKeyPresses += 1;
  } else if (arrowKeyPresses == 9) {
    arrowKeyPresses = 0;
  }
  print(arrowKeyPresses);
}
