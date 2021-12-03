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
	canvas.width = 0.75 * window.innerWidth;
	canvas.height = 0.75 * window.innerHeight;
	console.log("Window Loaded.");
})

window.addEventListener("resize", function(){
	ctx.canvas.width  = 0.75*window.innerWidth;
	ctx.canvas.height = 0.75*window.innerHeight;
	console.log("Window Resized.")
});

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
	if (e.key == ' '){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		console.log("Cleared Canvass");
	}
	if (e.key == 'ArrowUp'){
		draws = false;
		console.log("Pen up");
	}
	if (e.key == 'ArrowDown'){
		draws = true;
		console.log("Pen down");
	}
})

// Functions!
// I would add a function for draw
function draw(){
	console.log("I am going to draw!!");
	
	//CHECK OUT beginPath()
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI*2, false);
	if (defaultColor) {
		ctx.fillStyle = "rgb(255, 0, 0)";
	}
	ctx.fill();
}

function switchColor(){
	document.addEventListener('keydown', function(e){
		defaultColor = false;
		if (e.key == 'b'){
			ctx.fillStyle = "rgb(0, 0, 255)";
			console.log("Chnaged color to blue.");
		}
		if (e.key == 'r'){
			ctx.fillStyle = "rgb(255, 0, 0)";
			console.log("Changed color to red.");
		}
		if (e.key == 'g'){
			ctx.fillStyle = "rgb(0, 255, 0)";
			console.log("Changed color to green.");
		}
		if (e.key == 'y'){
			ctx.fillStyle = "rgb(255, 255, 0)";
			console.log("Changed color to yellow.");
		}
	});
}
