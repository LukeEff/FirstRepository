/*
This program simulates you in a dark cave. You click to replenish
light. If it gets too dark, you lose.

*/

var light = 255;
var luckyNumber = Math.random(10);
function setup() {
  createCanvas(960, 480);
  background(255);
}


function draw() {
if(light > 0) {
if(mouseIsPressed) {
  light = light + 1;
} else {
 light = light - 1;
}
} else {
  print("Game over!");
}
background(light);
fill(0);
for(let i = 0; i < 520; i+=40) {
  ellipse(0,i,80,80);
  ellipse(960,i,80,80);
}
for(let i = 0; i < 1000; i+=40) {
  ellipse(i,0,80,80);
  ellipse(i,480,80,80);
}
fill(0)
//triangle(480,0,920,480,40,480);
stroke(0);
line(40,480,480,0);

line(920,480,480,0);
}