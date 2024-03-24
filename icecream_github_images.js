var icecream = [];
var lerper;

function preload() {

  for (i=0; i<30; i++) {
    icecream[i] = loadImage("https://raw.githubusercontent.com/colinwillowtree/Ice_Cream_Basic/master/data/icecream_" + nf(i, 4) + ".png");
  }
}

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  document.body.style.overflow = "hidden";
  imageMode(CENTER);
  lerper = 15;
  blendMode(BLEND);
  textAlign(CENTER);
  rectMode(CENTER);
}


function draw() {

  clear();

  var mapper = map(mouseX, 0, width, 30, 0);
  lerper = lerp(lerper, mapper, 0.1);
  var frame = floor(lerper);

  push();
  image(icecream[frame], 0, 0, width/2, width/2);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
