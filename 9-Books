var books = 1;

// draw shelf
var placeY = 120;
for (var q = 0; q < 3; q++) {
fill(173, 117, 33);
rect(0, placeY, 400, 10);
placeY+=194;
}

//drawbook function
var drawBook = function(Rx, Ry) {
    fill(Rx+237, Ry*2, Rx);
    rect(Rx, Ry, 75, 100);
};
var xPositions = [5, 150, 300, 5, 150, 300];
var yPositions = [20, 20, 20, 214, 214, 214];

//drawbooks and title
for (var i = 0; i < xPositions.length; i++) {
    
 if (books === 1) {
    var book = {
    title: "The Giver",
    recommend: false,
    author: "Lowry",
    stars: 3
    };
}
else if (books === 2) {
    var book = {
    title: "The Help",
    recommend: true,
    author: "Stockett",
    stars: 5
    };
}
else if (books === 3) {
    var book = {
    title: "Divergent",
    recommend: false,
    author: "Roth",
    stars: 3
    };
}
else if (books === 4) {
    var book = {
    title: "Darkest Mind",
    recommend: true,
    author: "Bracken",
    stars: 5
    };
}
else if (books === 5) {
    var book = {
    title: "Water for Elephants",
    recommend: true,
    author: "Gruen",
    stars: 4
    };
}
else {
    var book = {
    title: "Hunger Games",
    recommend:false,
    author: "Collins",
    stars: 2
    };
}
    drawBook(xPositions[i], yPositions[i]);
    fill(57, 7, 237);
    text(book.title, xPositions[i]+10, yPositions[i]+15, 70,100);
    text(book.author, xPositions[i]+10, yPositions[i]+55, 70,100);
    for (var w = 0; w < book.stars; w++) {
    image(getImage("space/star"), xPositions[i]+w*13, yPositions[i]+78, 20, 20);
}
if (book.recommend===true) {
    image(getImage("space/plus"), xPositions[i]+81, yPositions[i]+78, 20, 20);
}
else {
    image(getImage("space/minus"),xPositions[i]+81, yPositions[i]+78, 20, 20);
}
books++;
}
