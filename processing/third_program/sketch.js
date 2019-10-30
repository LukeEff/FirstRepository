/*
This program simulates you in a dark cave. You click to replenish
light. If it gets too dark, you lose.

*/

function setup() {
  createCanvas(480, 120);
  background(0, 0, 40);
  noStroke();
}


function draw() {

if(mouseIsPressed) {
  
  ellipse(268, 118, 200, 200);
  fill(0, 0, 255);
  ellipse(228, -16, 200, 200);
 fill(0, 0, 255);
  ellipse(228, -16, 200, 200);
  fill(0, 255, 0);
 ellipse(132, 82, 200, 200);
 fill(255, 0, 0);
} else {
 fill(255, 0, 0);
 ellipse(132, 82, 200, 200);
 ellipse(228, -16, 200, 200);
 fill(0, 255, 0);
 ellipse(228, -16, 200, 200);
 fill(0, 0, 255);
ellipse(268, 118, 200, 200);
}

}