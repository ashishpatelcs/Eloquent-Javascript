<script>
  tools["Pick color"] = function(event, cx) {
    // Your code here.
    var pos = relativePos(event, cx.canvas);
    var pixel = pixelAt(cx, pos.x, pos.y);
    cx.fillStyle = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
    cx.strokeStyle = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
    function pixelAt(cx, x, y) {
      var data = cx.getImageData(x, y, 1, 1);
      return data.data;
    }
  };
</script>

<link rel="stylesheet" href="css/paint.css">
<body>
  <script>createPaint(document.body);</script>
</body>
