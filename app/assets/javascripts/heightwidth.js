var formResolution = document.createElement('form');
var height = document.createElement('input');
var width = document.createElement('input');
var submit = document.createElement('input');
var resolution = document.getElementById('resolution')
height.setAttribute('type', "text");
height.setAttribute('name', "canvas height");
height.setAttribute('placeholder', "canvas height");
width.setAttribute('type', "text");
width.setAttribute('name', "canvas width");
width.setAttribute('placeholder', "canvas width")
submit.setAttribute('type', "submit");
submit.setAttribute('value', "Submit");
formResolution.appendChild(height);
formResolution.appendChild(width);
formResolution.appendChild(submit);
resolution.appendChild(formResolution);

submit.addEventListener("click", function(e){
  e.preventDefault();
  canvas.width = width.value;
  canvas.height = height.value;
});

