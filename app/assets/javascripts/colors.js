var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green',
'blue', 'indigo', 'violet'];


//iterating through array of colors,creating new div and assigning it's background color to it
// with color name, listens on click and appends this div to colors div
for(var i=0, n=colors.length; i<n; i++){
  var swatch = document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener('click', setSwatch);
  document.getElementById('colors').appendChild(swatch);
};

function setColor(color){
  context.fillStyle = color;
  context.strokeStyle = color;
  var active = document.getElementsByClassName('active')[0];
  if(active){
    active.className = 'swatch';
  }
};

function setSwatch(e) {
  //identify swatch
  var swatch = e.target;
  //set color
  setColor(swatch.style.backgroundColor);
  //give active class (space after quote because we're adding 2 classes)
  swatch.className += ' active'
};
//shows the default chosen swatch on page load
setSwatch({target: document.getElementsByClassName('swatch')[0]});