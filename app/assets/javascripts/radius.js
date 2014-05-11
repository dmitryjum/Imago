var RadSpan;
var setRadius = function(newRadius){
    radius = newRadius;
    context.lineWidth = radius*2;
};


$('[data-slider]').on('change', function(){
  radSpan = document.getElementById('sliderOutput2').value;
  setRadius(radSpan);
})