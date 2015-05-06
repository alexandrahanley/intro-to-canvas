function drawBorder(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.strokeRect(0,0, size.x, size.y);
}

function fillBlue(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  context.fillStyle = "blue";
  var size = { x: canvas.width, y: canvas.height };
  context.fillRect(0, 0, size.x/2, size.y/2);
}

function fillRed(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  context.fillStyle = "red";
  var size = { x: canvas.width, y: canvas.height };
  context.fillRect(canvas.height/2, canvas.width/2, size.x/2, size.y/2);
}

function buttonOrange(){
  var context = canvas.getContext('2d');
  context.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
  context.globalAlpha = Math.random();
  context.fillRect(Math.floor(Math.random()*200),Math.floor(Math.random()*100), Math.floor(Math.random()*200),Math.floor(Math.random()*200));
}

function squareTrans(){
  var context = canvas.getContext('2d');
  context.globalAlpha = Math.random();
  context.beginPath();
  context.arc(320, 120, 60, 0, 2 * Math.PI, false);
  context.fillStyle = 'green';
  context.fill();
}

function clearArea(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.clearRect(0,0, size.x, size.y);
}

document.getElementById("canvas").addEventListener("click", function(){
  fillBlue();
});

document.getElementById("canvas").addEventListener("dblclick", function(){
  fillRed();
});

document.getElementById("orange").addEventListener("click", function(){
  buttonOrange();
});

document.getElementById("green").addEventListener("click", function(){
  squareTrans();
});

document.getElementById("clear").addEventListener("click", function(){
  clearArea();
  drawBorder();
});

drawBorder();
