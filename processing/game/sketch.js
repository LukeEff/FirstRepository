/*
This program simulates you in a dark cave. You click to replenish
light. If it gets too dark, you lose.

*/
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

function core() {
  return Math.floor(Math.random() * Math.floor(20));
}
function apex() {
  return Math.floor(Math.random() * Math.floor(8)) + 3;
}
function bright() {
  return Math.floor(Math.random() * Math.floor(255)); 
}
function xpos() {
  return Math.floor(Math.random() * Math.floor(getWidth()));
}
function ypos() {
  return Math.floor(Math.random() * Math.floor(getHeight()));
}

var amountOfStars = 60;
var light = 255;
var bobbing = 1;
var other = 10;
var luckyNumber = Math.random(10);

function setup() {
  createCanvas(getWidth(), getHeight());
  background(0);
  
  for(i = 0; i < amountOfStars; i++) {
    var xposition = xpos();
    var yposition = ypos();
    var starCore = core();
    var starApex = apex();
    var starLight = bright();
  
  
  /*
    fill(255,200,0,starLight/4)  
    stroke(255,150,0,starLight/4)
    ellipse(xposition,yposition,starCore*2,starCore*2);
    fill(255,150,0,starLight/8)  
    stroke(255,150,0,starLight/8)
    ellipse(xposition,yposition,starCore*4,starCore * 4);
  */
    fill(255,255,200,starLight);
    star(xposition, yposition, starCore/3, starCore, starApex);
  } 
  
}


function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function draw() {
if(light > 0) {
if(mouseIsPressed) {
  light = light;
} else {
 light = light;
}
} else {
  print("Game over!");
}


fill(0)
fill(255,255,110,255);
stroke(0)
arc(getWidth()/2, getHeight()*.52, getWidth()/1.95, getHeight()/2,PI*2,PI);
fill(light - 90,light - 90,light - 90,255);
stroke(0);
ellipse(getWidth()/2, getHeight()/1.9, getWidth()*.75, getHeight()/8);
fill(0)
ellipse(getWidth()/2, getHeight()/1.9, getWidth()*.625, getHeight()/12);
fill(255,255,110,255);
stroke(0)
ellipse(getWidth()/2, getHeight()*.5495, getWidth()/2, getHeight()/26);
arc(getWidth()/2, getHeight()*.5495, getWidth()/2, getHeight()/2,PI,PI*2);

//arc(getWidth()/2, getHeight()/2, getWidth()*.75, getHeight()/8,PI*1.95,PI*1.05);
//arc(50, 480, 1000, 200, PI*3.1, HALF_PI);
//arc(-100, 480, 1000, 200, PI*3.1, HALF_PI);


}

