/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xpos = 0;
var ypos = 0;


draw = function() {
    strokeWeight(6)
    stroke(48, 60 ,267)
    fill(5 , 310 , 534)
    ellipse( xpos,ypos ,67 ,167)

    xpos = xpos +20;
    ypos = ypos +20;
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
