background(37, 177, 219);
var drawBubble = function(positionX,positionY)
{
    noFill();
    ellipse(positionX, positionY, 15,15);
};
var drawFish = function(centerX,centerY) {
var bodyLength = random(20,100);
var bodyHeight = bodyLength*10/12;
var bodyColor = color(random(0,100), random(0,100), random(0,100));

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

mouseClicked = function() {
  drawFish(mouseX, mouseY); 
  draw();
};

draw = function() {
    drawBubble(random(20,400),random(20,400));
};
