<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>
<span></span>

<script>
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);
  
  var suggestions = [];
  var input = document.querySelector("input");
  input.addEventListener("input", function(event) {
      if (input.value != "") {
        suggestions = [];
        var pattern = "^(" +input.value+ ")\\w+";
        var regex = new RegExp(pattern, "gi");
        terms.forEach(function(term) {
          if(regex.test(term)) suggestions.push(term);
        });
        var list = document.createElement("ul");
        suggestions.forEach(function(suggestion) {
          var item = document.createElement("li");
          item.textContent = suggestion;
          list.appendChild(item);
        });
        var div = document.querySelector("div");
        if(div.childNodes.length === 0)
          div.appendChild(list);
        else
        	div.replaceChild(list, div.childNodes[0]);
        
        div.addEventListener("click", function(event) {
          input.value = event.target.textContent;
        });
        
      }
  });

</script>
