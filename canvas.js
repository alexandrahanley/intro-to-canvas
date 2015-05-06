function drawBorder(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.strokeRect(0,0, size.x, size.y);
}

function fillCanvas(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  context.fillStyle = "blue";
  context.fillRect(10, 10, 10, 40);
}

drawBorder();
fillCanvas();
