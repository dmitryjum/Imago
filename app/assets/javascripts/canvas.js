// $(document).ready(function(){
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;

canvas.width = 400;
canvas.height = 400;


putPoint = function(e) {
  context.beginPath();
  context.arc(e.offsetX, e.offsetX, radius, 0, Math.Pi * 2, false);
  context.fillStyle = "black"
  context.fill();
}

canvas.addEventListener('touch', alert("hello"));
// });