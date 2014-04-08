// $(document).ready(function() {

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var radius = 10;
  // switch to be able to drag and keep on putting dots down
  var dragging = false;

  canvas.width = 400;
  canvas.height = 400;
  //setting up thinkness of connecting line to the width of the dot
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

// });
