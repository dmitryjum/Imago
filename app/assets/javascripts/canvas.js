var canvas;
var context;
var radius;
var originalImage;
var pixelation;
function canvasFunc() {  
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  var invertButton = document.getElementById("invert-colors");
  var brightButton = document.getElementById("brightness");
  var darkButton = document.getElementById("darkness");
  var greyButton = document.getElementById("greyscale");
  var copyButton = document.getElementById("copy");
  var pasteButton = document.getElementById("paste");
  var pixelButton = document.getElementById("pixel");

  canvas.width = 900;
  canvas.height = 600;
  radius = 10;
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

    Filters.darkness = function() {
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      data[i] -= 15;
      data[i + 1] -= 15;
      data[i + 2] -= 15;
    }
    context.putImageData(imageData, 0, 0);
  };

  Filters.greyscale = function() {
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      var v = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      data[i] = data[i + 1] = data[i + 2] = v;
    }
    context.putImageData(imageData, 0, 0);
  }

  pixelation = 10;  //don't want to mess with custom value yet
  // preset pixelation value will be ok for user for now
  Filters.pixel = function(pixelation) {
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    for (var y = 0; y < canvas.height; y += pixelation) {
      for (var x = 0; x < canvas.width; x += pixelation) {
        // get color components of the sample pixel
        var red = data[((canvas.width * y) + x) * 4];
        var green = data[((canvas.width * y) + x) * 4 + 1];
        var blue = data[((canvas.width * y) + x) * 4 + 2];

        // overwrite pixels in a square below and to
        // the right of  the smaple pixel, whoes width and
        // height are equal to the pixelation amount
        for (var n = 0; n < pixelation; n++) {
          for (var m = 0; m < pixelation; m++) {
            if (x + m < canvas.width) {
              data[((canvas.width * (y + n)) + (x + m)) * 4] = red;
              data[((canvas.width * (y + n)) + (x + m)) * 4 + 1] = green;
              data[((canvas.width * (y + n)) + (x + m)) * 4 + 2] = blue;
            }
          }
        }
      }
    }
    context.putImageData(imageData, 0, 0);
    console.log("worked");
  };

  Filters.copy = function(){
    originalImage = context.getImageData(0, 0, canvas.width, canvas.height);
  };

  Filters.paste = function(){
    context.putImageData(originalImage, 0, 0);
  };


// events and listeners for filters
  copyButton.onclick = function(){
    Filters.copy();
  };

  pasteButton.onclick = function(){
    Filters.paste();
  };

  pixelButton.onclick = function(){
    Filters.pixel(pixelation);
  };

  brightButton.onclick = function(){
    Filters.brightness();
  };

  darkButton.onclick = function(){
    Filters.darkness();
  };

  greyButton.onclick = function(){
    Filters.greyscale();
  };

  invertButton.onclick = function(){
    Filters.invertColors();
  };
}