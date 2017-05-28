<canvas width="600" height="200"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");

  function drawTrapezoid() {
    cx.beginPath();
    cx.moveTo(50, 50);
    cx.lineTo(120, 50);
    cx.lineTo(150, 120);
    cx.lineTo(20, 120);
    cx.lineTo(50, 50);
    cx.stroke();
  }
  
  function drawDiamond() {
    cx.beginPath();
    cx.moveTo(200, 10);
    cx.lineTo(250, 60);
    cx.lineTo(200, 110);
    cx.lineTo(150, 60);
    cx.lineTo(200, 10);
    cx.fillStyle="red";
    cx.fill();
  }
  
  function drawZigzagg() {
    cx.beginPath();
    cx.moveTo(300, 10);
    for(var y = 10; y < 90; y+=7) {
      if(y%2 === 0) cx.lineTo(400, y);
      else cx.lineTo(300, y);
    }
    cx.stroke();
  }
  
  function drawCircle() {
    cx.beginPath();
  // center=(50,50) radius=40 angle=0 to 7
    cx.moveTo(500, 100);
  for(var i = 0; i < 10; i += 1) {
    cx.arc(500, 100, 50, 0, 7);
    
  }
  // center=(450,50) radius=40 angle=0 to ½π
  // cx.arc(500, 100, 40, 0, 0.5 * Math.PI);
  cx.stroke();
  }
  
  function DrawCirclePoints(points, radius, center)
{
  	/*cx.beginPath();
  	cx.moveTo(center.x, center.y);
    var slice = 2 * Math.PI / points;
    for (var i = 0; i < points; i+=1)
    {
        var angle = slice * i;
        var newX = (center.x + radius * Math.cos(angle));
        var newY = (center.y + radius * Math.sin(angle));
        var p = {x: newX, y: newY};
      	cx.lineTo(newX, newY);
      	radius += 0.1;
    }
  	cx.stroke();*/
  cx.beginPath();
  cx.moveTo(500,50);
  for (i=0; i< 300; i++) {
  	var angle = 0.1 * i;
  	var x=500+(1+angle)*Math.cos(angle);
  	var y=50+(1+angle)*Math.sin(angle);
  	cx.lineTo(x, y);
  }
  cx.stroke();
}
  
  
  DrawCirclePoints(100, 5, {x:500, y:50});
  drawZigzagg();
  drawTrapezoid();
  drawDiamond();
</script>
