var xPositions = [];
var yPositions = [];
var colour1 = [];
var colour2 = [];
draw = function() {
    background(204, 247, 255);
    
    mouseClicked = function() {
        xPositions.push(mouseX);
        yPositions.push(mouseY);
        colour1.push(mouseX);
        colour2.push(mouseY);
    };

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(colour1[i], colour2[i], 205);
        
        if (i%2===0)
        {
        ellipse(xPositions[i], yPositions[i], 10, 10);
        }
        else 
        {
        image(getImage("avatars/leaf-yellow"), xPositions[i], yPositions[i], 20, 20);
        }
        yPositions[i] +=2;
        
        while(yPositions[i] > 400) {
            yPositions[i] = 0;
        }
    }
    
};
