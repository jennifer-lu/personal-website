var pixels = [];
var previousPixel = -1;
var activePixel = -1;
for (var i = 0; i < 500; i++) {
    pixels[i] = 0;
}

var colors = ["#000000", "#2A001C", "#550039", "#800055", "#AA0071", "#BB256A", "#CC4C44", "#DD732D", "#EE9917", "#FFBF00"];
$(document).ready(function(){
  for (var i = 0; i < 500; i++) {
    document.getElementById("pixelol").innerHTML += '<li id="' + i + '" class="pixel" brightness="0"></li>';
  }
  $(document).mousemove(function(event){
    previousPixel = activePixel;
    activePixel = 20 * Math.floor((event.pageY - $(document).scrollTop()) * 20 / window.innerWidth) + Math.floor(event.pageX * 20 / window.innerWidth);
    if (activePixel != previousPixel) {
      update(activePixel);
    }
  });
});

function update(index) {
  var pixel = document.getElementById(index);
  var newBrightness = pixel.getAttribute("brightness");
  if (newBrightness < 9) {
    newBrightness++;
  }
  pixel.setAttribute("brightness", newBrightness);
  pixel.style.background = colors[pixel.getAttribute("brightness")];
}
