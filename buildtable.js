<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    var table = document.createElement("table");
    var keys = Object.keys(data[0]);
    var row = document.createElement("tr");
    keys.forEach(function(key) {
      var th = document.createElement("th");
      th.appendChild(document.createTextNode(key));
      row.appendChild(th);
    });
    table.appendChild(row);
    // Your code here.
    data.forEach(function(obj) {
      var row = document.createElement("tr");
      var ch1 = document.createElement("td");
      ch1.appendChild(document.createTextNode(obj[keys[0]]));
      row.appendChild(ch1);
      var ch2 = document.createElement("td");
      ch2.appendChild(document.createTextNode(obj[keys[1]]));
      row.appendChild(ch2);
      var ch3 = document.createElement("td");
      ch3.appendChild(document.createTextNode(obj[keys[2]]));
      row.appendChild(ch3);                      
      table.appendChild(row);
    });
    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>
