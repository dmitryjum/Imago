var colorBox;
var choose;
// var currentColor;
function colorPickerFunc(){
  colorBox = document.querySelector(".sp-preview-inner");
  choose = document.querySelector(".sp-choose")
  // currentColor = colorBox.style.backgroundColor;
  choose.addEventListener('click', function(){
    // var newColor = colorBox.style.backgroundColor;
    setColor();
  });
  setColor();
};

function setColor(){
  var color = colorBox.style.backgroundColor;
  context.fillStyle = color;
  context.strokeStyle = color;
};

// setColor(currentColor);