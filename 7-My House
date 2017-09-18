background(219, 255, 255);

//grass
var horiz = -5; 
while(horiz < 382)
{
    var vert = 272;
    while(vert < 368)
    {
        image(getImage("cute/GrassBlock"),horiz,vert,75,50);
        vert += 22;
    }
    horiz += 48;
}
//house 
var x = 320;
while (x>150) {
    image(getImage("cute/WoodBlock"), 56, x, 200, 40);
    image(getImage("cute/WoodBlock"), 146, x-20, 200, 40);
    x -= 40;
}
var y= 320;
while (y>150) {
    image(getImage("cute/WoodBlock"), 240, y, 102, 40);
    image(getImage("cute/WoodBlock"), 59, y-20, 114, 40);
    y -= 40;
}
//roof
fill(130, 77, 69);
triangle(196, 28, 368, 155, 33, 155);

//door
fill(120, 80, 19);
rect(180, 280, 40, 77);

//plants
for (var placement = 2; placement < 390; placement += 110)
{
    image(getImage("cute/TreeUgly"), placement, 298, 70,100);
}
