// Variables!
var radius = 15;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");

// I would add more variables for x, y, radius, and color
var lift = false;
var color = "black";

//Listeners!!

//Add a listener for loading the window
window.addEventListener("load", function(){
	canvass.width = 0.75 * window.innerWidth;
	canvas.height = 0.75 * window.innerHeight;
	console.log("Window Loaded.");
});

//Resized the window
window.addEventListener("resize", function(){
	ctx.canvas.width  = 0.75*window.innerWidth;
	ctx.canvas.height = 0.75*window.innerHeight;
	console.log("Window Resized.");
});


//Add a listener for the mouse movement (started below)
canvas.addEventListener('mousemove', function(e){
	x = e.clientX;
	y = e.clientY;
	if (!lift){
		draw();
	}
});

//Add a listener for the key events (started below)


//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	if(e.key = "b"){
		color = "blue"
	}
	if(e.key = "y"){
		color = "yellow"
	}
	if(e.key = "r"){
		color = "red"
	}
	if(e.key = "g"){
		color = "green"
	}
	if (e.key == ' '){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		console.log("Cleared Canvass");
	}
	if (e.key == 'ArrowUp'){
		lift = true;
		console.log("Pen up");
	}
	if (e.key == 'ArrowDown'){
		lift = false;
		console.log("Pen down");
	}
});


document.querySelector("input").addEventListener("input", function() {
    color=document.querySelector("input").value;
	color = this.value;
})

// Functions!

// I would add a function for draw
function draw(){
	console.log("I am going to draw!!");
	
	//CHECK OUT beginPath()
	ctx.beginPath();
	ctx.fillStyle= ""+color+"" ;
	ctx.arc(x, y, 5, 0, 2 * Math.PI);
	ctx.fill();
}
