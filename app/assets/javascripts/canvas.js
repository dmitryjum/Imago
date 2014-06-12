var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var invertButton = document.getElementById("invert-colors");
var brightButton = document.getElementById("brightness");

canvas.width = 900;
canvas.height = 600;
var radius = 10;
Filters = {};
// switch to be able to drag and keep on putting dots down
var dragging = false;
//setting up thikness of connecting line to the width of the dot
context.lineWidth = radius * 2;

var putPoint = function(e){
  if (dragging){
    //connects 2 dots in memory
  context.lineTo(e.offsetX, e.offsetY);
  // striking the line between 2 dots on canvas
  context.stroke();
  context.beginPath();
  //creating the dot based on parameters below(in memory)
  context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
  //placing the dot from memory to canvas
  context.fill();
  //starts that path over
  context.beginPath();
  //begins dot connecting process
  context.moveTo(e.offsetX, e.offsetY);
  }
};

var engage = function(e) {
  dragging = true;
  putPoint(e);
};

var disengage = function() {
  dragging = false;
  //clearing the current path in order not to lineTo()
  // between dots every time we "mouseup" and "mousedown"
  context.beginPath();
};
// puts dot down
canvas.addEventListener('mousedown', engage);
// puts dots while dragging
canvas.addEventListener('mousemove', putPoint);
// stops putting dots
canvas.addEventListener('mouseup', disengage);

// filter functions

Filters.invertColors = function() {
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i];
      data[i + 1] = 255 - data[i + 1];
      data[i + 2] = 255 - data[i + 2];
    };
    context.putImageData(imageData, 0, 0);
};
// brightens image for 15 units, but doesn't do it back yet everytime you click a button
Filters.brightness = function() {
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    data[i] += 15;
    data[i + 1] += 15;
    data[i + 2] += 15;
  }
  context.putImageData(imageData, 0, 0);
};

brightButton.onclick = function(){
  Filters.brightness();
};

invertButton.onclick = function(){
  Filters.invertColors();
};
