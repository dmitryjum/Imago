var RadSpan;
var setRadius = function(newRadius){
    radius = newRadius;
    context.lineWidth = radius*2;
};
// foundation slider listener
$('[data-slider]').on('change', function(){
  radSpan = document.getElementById('sliderOutput2').value;
  setRadius(radSpan);
})