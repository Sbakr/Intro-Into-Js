fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 6));
if (answer === 1) {
    text("NOT YET", 176, 208);
    text("IMPLEMENTED", 159, 229); 
}
else if (answer === 2) {
    text("PROBABLY", 169, 208);
    text("LIKELY", 181, 229); 
}
else if (answer === 3) {
    text("MOST", 183, 208);
    text("CERTANLY", 170, 229); 
}
else if (answer === 4) {
    text("ASK YOUR", 172, 208);
    text("MOTHER", 177, 229); 
}
else if (answer === 5) {
    text("THE FUTURE", 163, 208);
    text("WILL TELL YOU", 156, 229); 
}
