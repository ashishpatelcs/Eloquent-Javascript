<canvas width="400" height="400"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");

  var lastTime = null;
  function frame(time) {
    if (lastTime != null)
      updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
	
  var x = 100, y = 100, dx = 5, dy = 5;
  function updateAnimation(step) {
    // Your code here.
    
  }
  setInterval(draw, 10);
  function draw() {
    cx.clearRect(0,0, 400,400);
    cx.beginPath();
    cx.arc(x, y, 20, 0, Math.PI*2, true);
    cx.fillStyle="blue";
    cx.closePath();
    cx.fill();
    
    if (x < 0 || x > 400) dx = -dx;
    if ( y < 0 || y > 400) dy = -dy;
    x += dx;
    y += dy;
  };
</script>
