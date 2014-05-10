var colorBox = document.querySelector(".sp-preview-inner");
var choose = document.querySelector(".sp-choose")
var currentColor = colorBox.style.backgroundColor;
choose.addEventListener('click', function(){
  var newColor = colorBox.style.backgroundColor;
  setColor(newColor);
});

function setColor(color){
  context.fillStyle = color;
  context.strokeStyle = color;
};

setColor(currentColor);