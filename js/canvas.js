// Variables!
var radius = 15;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");

// I would add more variables for x, y, radius, and color
var draws = true;
var defaultColor = true;

//Listeners!!

//Add a listener for loading the window
window.addEventListener("load", function(){
	ctx.canvas.width = window.innerWidth * 0.75;
	ctx.canvas.height = window.innerHeight * 0.75;
	console.log("Loading Window.");
})

//Add a listener for the color picker
colorPicker.addEventListener('change', function(){
	defaultColor = false;
	ctx.fillStyle = colorPicker.value;
	console.log("Changed Color.");})

//Add a listener for the mouse movement (started below)
canvas.addEventListener('mousemove', function(e){
	console.log(this);
	console.log(e)
	const x = e.clientX;
	const y = e.clientY;
	if (draws){
		draw(x, y, 5);
		switchColor();
	}
})

//Add a listener for the key events (started below)


//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	console.log(this);
	console.log(e)
})

// Functions!
// I would add a function for draw
function draw(){
	console.log("I am going to draw!!");
	//CHECK OUT beginPath()
}

