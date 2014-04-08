var setRadius = function(newRadius){
  // logic below prevents us to set radius property beyond our limits
  if(newRadius<minRad)
      newRadius = minRad;
    else if(newRadius>maxRad)
      newRadius = maxRad;
    radius = newRadius;
    context.lineWidth = radius*2;
// changing dot radius number on the pannel
    radSpan.innerHTML = radius
}

var minRad  = 2,
    maxRad     = 100,
    defaultRad = 10,
    interval = 2,
    radSpan    = document.getElementById('radval'),
    decRad     = document.getElementById('decrad'),
    incRad     = document.getElementById('incrad');

decRad.addEventListener('click', function(){
  setRadius(radius-interval)
});
incRad.addEventListener('click', function(){
  setRadius(radius+interval)
});

setRadius(defaultRad);