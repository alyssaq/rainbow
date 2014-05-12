define([], 
function () {

  var drawShape = function (r, g, b) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    var radius = 0.25 * width;
    var overlap = 0.1 * width;
    
    canvas.style.border = "black 1px solid";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // composite property to add color values
    ctx.globalCompositeOperation = 'lighter';

    ctx.fillStyle = 'rgb('+r+',0,0)';
    ctx.beginPath();
    ctx.arc(width*0.25 + overlap, height*0.25 + overlap, radius, 0, Math.PI*2);
    ctx.fill();

    ctx.fillStyle = 'rgb(0,'+g+',0)';
    ctx.beginPath();
    ctx.arc(width*0.75 - overlap, height*0.25 + overlap, radius, 0, Math.PI*2);
    ctx.fill();;

    ctx.fillStyle = 'rgb(0,0,'+b+')';
    ctx.beginPath();
    ctx.arc(width*0.5, height*0.75 - overlap, radius, 0, Math.PI*2);
    ctx.fill();
  }

  return {
    draw: drawShape
  };
});
