<div id="grid"></div>
<button onclick="run();" id="next">Next generation</button>

<script>
  // Your code here.
  var grid = [];
  var gridW = gridH = 4;
  var gridL = 16;
  var result = "";
  for(var i = 0; i < 16; i++) {
    var ch = document.createElement("input");
    if(i%4 === 0) {
      document.querySelector("#grid").appendChild(document.createElement("br"));
    }
    ch.type="checkbox";
    ch.id = "c"+(i+1);
    document.querySelector("#grid").appendChild(ch);
  }
  var c10 = document.querySelectorAll("input");
  //c10.checked = true;
  for(var key in c10) {
    var t = Number(key);
    if (!isNaN(t)) {
      grid[t] = t;
    }
  }
  
  var gridDiv = document.querySelector("#grid");
  gridDiv.addEventListener("change", function(e) {
    var cid = e.target.id;
    var id = Number(cid.slice(1));
    if (e.target.checked == true)
      grid[id-1] = true;
    else
      grid[id-1] = false;  
    //console.log(grid);
  });
  
  function neighbors(cell) {
  	var n = [];
    var temp = [];
    temp.push(cell + gridW);
    temp.push(cell - gridW);
    if (cell != 1 && cell != 5 && cell != 9 && cell != 13) {
    	temp.push(cell + gridW - 1);
        temp.push(cell - 1);
      	temp.push(cell - gridW - 1);
    }
    
    if (cell != 4 && cell != 8 && cell != 12 && cell != 16) {
      temp.push(cell - gridW + 1);
      temp.push(cell + gridW + 1);
      temp.push(cell + 1);
    }
    
    temp.forEach(function(ncell) {
      if (ncell > 0 && ncell < gridL + 1) n.push(ncell);
    });
    n.sort();
    return n;
  }
  
  function run() {
    var oldGrid = grid;
    var newGrid = [];
    var counter = 0;
    for(var i = 1; i <= 16; i++) {
      myn = neighbors(i);
      myn.forEach(function(n) {
        if(oldGrid[n-1] == true) counter += 1;
      });
      if(oldGrid[i-1] == false && counter == 3) newGrid[i-1] = true;
      else if(oldGrid[i-1] == true && counter == 2 || counter == 3) newGrid[i-1] = true;
      else newGrid[i-1] = false;
      var ch = document.querySelector("#c"+i);
      ch.checked = newGrid[i-1];
      counter = 0;
    }
  }
  //neighbors(1);
</script>
