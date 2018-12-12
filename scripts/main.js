var w = window.innerWidth;
var h = window.innerHeight;
var movementStrength = 25;
var height = movementStrength / h;
var width = movementStrength / w;

document.addEventListener("DOMContentLoaded", ready);

function ready() {
  if (w > 720) {
    document.addEventListener('mousemove', mouseMove);
  }

  new Snow('#snow',{
      number:200,
      r: 2.5,
      v: 0.8
  });
};

function mouseMove(e) {
  var pageX = e.pageX - (h / 2);
  var pageY = e.pageY - (w / 2);
  var newvalueX1 = width*2 * pageX * -1 - 25;
  var newvalueY1 = height*2 * pageY * -1 - 50;
  var newvalueX2 = width * pageX * -1 - 25;
  var newvalueY2 = height * pageY * -1 - 50;
  document.getElementById('background').style.backgroundPosition = newvalueX1+"px "+newvalueY1+"px";
  document.getElementById('snow').style.backgroundPosition = newvalueX2+"px "+newvalueY2+"px";
}