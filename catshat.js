/*
The cat’s hat

Extend the cat animation defined earlier so that both the cat and his hat (<img src="img/hat.png">)
orbit at opposite sides of the ellipse.

Or make the hat circle around the cat. Or alter the animation in some other interesting way.

To make positioning multiple objects easier, it is probably a good idea to switch to absolute positioning.
This means that top and left are counted relative to the top left of the document. To avoid using negative
coordinates, you can simply add a fixed number of pixels to the position values.
*/

<p style="text-align:center;height:200px">
  <img src="img/cat.png" id="cat" style="position: absolute">
  <img src="img/hat.png" id="hat" style="position: absolute">
</p>
<script>
  var cat = document.querySelector("#cat");
  var hat = document.querySelector("#hat");
  // Your code here.
  var angle = 0, lastTime = null;
  function animate(time) {
    if (lastTime != null)
      angle += (time - lastTime) * 0.01;
    lastTime = time;
    var top = (Math.sin(angle) * 20) + 50;
    var left = (Math.cos(angle) * 200) + 350;
    cat.style.top = top + "px";
    cat.style.left = left + "px";
    hat.style.top = -top + "px";
    hat.style.left = -left + "px";
    animateHat(time, top, left);
    requestAnimationFrame(animate);
  }
  
  requestAnimationFrame(animate);
  
  function animateHat(time, top, left) {
  	if (lastTime != null) angle += (time - lastTime) * 0.01;
    lastTime = time;
    hat.style.top = top - (Math.sin(angle) * 20) + 10 + "px";
    hat.style.left = left - (Math.cos(angle) * 20) + 10 + "px";
    return;
  }
</script>
