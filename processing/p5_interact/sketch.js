/*
Drawing board
Left click to draw
right click to erase
no click to not draw
both clicks to draw in color
*/



function setup() {
  createCanvas(960, 480);
  background(0, 0, 40);
  noStroke();
}


function draw() {

  //both clicks
if (mouseIsPressed) {
  ellipse(268, 118, 200, 200);
  fill(0, 0, 255);
  ellipse(228, -16, 200, 200);
fill(0, 0, 255);
  ellipse(228, -16, 200, 200);
  fill(0, 255, 0);
ellipse(132, 82, 200, 200);
fill(255, 0, 0);
  if(mouseIsPressed) {



    fill(0);
    ellipse(228, -16, 200, 200);
  //right click
  } else if (mouseIsPressed) {
  fill(255);
  ellipse(mouseX,mouseY);
}
}


}