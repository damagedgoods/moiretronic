var t;
var radius = 2;
var step = 10;
function setup() {

	frameRate(120);
 	
	var width = 400;
	var height = 400;
 	createCanvas(width, height); 	
 	fill(100);
 	noStroke();
	t = 0; 	



}

function draw() {

	clear();
	drawBase();
	drawMobile();
	t++;

}

function drawBase() {

	fill(0,0,0);

	// Pinto la primera capa, quieta
	var num_x = width / step;
	var num_y = height / step;
	for (var i=0; i<num_x; i++) {
		for (var j=0; j<num_y; j++) {			
			ellipse(step*i, step*j, radius*2, radius*2);
		}
	}



}

function drawMobile() {

	fill(0,0,0);

	rotate(t/50);
	translate(-width, -height)

	// Pinto la segunda capa, que gira
	var num_x = width / step;
	var num_y = height / step;
	rotate();
	for (var i=0; i<num_x*4; i++) {
		for (var j=0; j<num_y*4; j++) {			
			ellipse(step*i, step*j, radius*2, radius*2);
		}
	}


}