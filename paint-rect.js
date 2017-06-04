<script>
  tools.Rectangle = function(event, cx) {
    // Your code here.
    var pos = relativePos(event, cx.canvas);
    trackDrag(drawRect);
    function drawRect(pos) {
      var x = pos.x, y = pos.y;
      var pos = relativePos(event, cx.canvas);
      console.log(x, y, pos);
      cx.fillRect(pos.x, pos.y, x-pos.x, y-pos.y);
      cx.stroke();
    }
  };
</script>

<link rel="stylesheet" href="css/paint.css">
<body>
  <script>createPaint(document.body);</script>
</body>
