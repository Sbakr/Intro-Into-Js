var placeX=50;
var placeY=200;
var bodySize = 30;

draw = function() 
{
    background(mouseX,200, mouseY);
    fill(mouseX, mouseY, 300);
   
   placeX+=1;
   
    //legs
    strokeWeight(4);
    line(placeX + bodySize*5/3,placeY,placeX + bodySize*5/3,placeY+bodySize);
    line(placeX + bodySize*5/6,placeY,placeX + bodySize*5/6,placeY+bodySize);
    line(placeX,placeY,placeX,placeY+bodySize);
    line(placeX - bodySize*5/6,placeY,placeX - bodySize*5/6,placeY+bodySize);
    line(placeX - bodySize*5/3,placeY,placeX - bodySize*5/3,placeY+bodySize);
    line(placeX - bodySize*5/2,placeY,placeX - bodySize*5/2,placeY+bodySize);
    line(placeX - bodySize*10/3,placeY,placeX - bodySize*10/3,placeY+bodySize);
    
    strokeWeight(1);
    //body
    ellipse(placeX - bodySize*10/3, placeY + bodySize*1/3, bodySize, bodySize);
    ellipse(placeX - bodySize*5/2, placeY, bodySize, bodySize);
    ellipse(placeX - bodySize*5/3, placeY - bodySize*1/3, bodySize, bodySize);
    ellipse(placeX - bodySize*5/6, placeY, bodySize, bodySize);
    ellipse(placeX, placeY + bodySize*1/3, bodySize, bodySize);
    ellipse(placeX + bodySize*5/6, placeY + bodySize*1/3, bodySize, bodySize);
    ellipse(placeX + bodySize*5/3, placeY, bodySize, bodySize);
    
    //head
    ellipse(placeX + bodySize*8/3, placeY - bodySize*1/5, bodySize*1.5, bodySize*1.5);
    
    //eyes 
    fill(10, 9, 9);
    ellipse(placeX + bodySize*7/3, placeY - bodySize*2/5, bodySize/5, bodySize/5);
    ellipse(placeX + bodySize*100/34, placeY - bodySize*2/5, bodySize/5, bodySize/5);
};
