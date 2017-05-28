<canvas width="600" height="300"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");
  var total = results.reduce(function(sum, choice) {
    return sum + choice.count;
  }, 0);

  var currentAngle = -0.5 * Math.PI;
  var centerX = 300, centerY = 150;
  // Add code to draw the slice labels in this loop.
  results.forEach(function(result) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    var middleAngle = currentAngle + 0.5 * sliceAngle;
	var textX = Math.cos(middleAngle) * 120 + centerX;
	var textY = Math.sin(middleAngle) * 120 + centerY;
    cx.beginPath();
    cx.textBaseline = "middle";
    if(textX < centerX) cx.textAlign = "right";
    else cx.textAlign = "left";
    cx.fillText(result.name, textX, textY);
    cx.arc(centerX, centerY, 100,
           currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx.lineTo(centerX, centerY);
    cx.fillStyle = result.color;
    cx.fill();
  });
</script>
