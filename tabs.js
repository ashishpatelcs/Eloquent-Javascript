/*
A tabbed interface is a common design pattern. It allows you to select an interface panel by choosing
from a number of tabs “sticking out” above an element.

In this exercise you’ll implement a simple tabbed interface. Write a function, asTabs, that takes a DOM
node and creates a tabbed interface showing the child elements of that node. It should insert a list of
<button> elements at the top of the node, one for each child element, containing text retrieved from the 
data-tabname attribute of the child. All but one of the original children should be hidden (given a display
style of none), and the currently visible node can be selected by clicking the buttons.

When it works, extend it to also style the currently active button differently.
*/

<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>

<style>
  .hidden {
    display: none;
  }
  
  .button-active {
    background-color: red;
    border: 1px solid green;
  }
  
</style>

<script>
  function asTabs(node) {
    var elements = Array.prototype.slice.call(node.getElementsByTagName("div"));
    var list = document.createElement("ul");
    var counter = false;
    elements.forEach(function(element) {
      if (counter)
      	element.className = "hidden";
      counter = true;
      var button = document.createElement("button");
      var child = document.createTextNode(element.getAttribute("data-tabname"));
      button.appendChild(child);
      var temp = document.createElement("li");
      temp.appendChild(button);
      list.appendChild(temp);
    });
    node.insertBefore(list, node.childNodes[0]);
    return node;
  }  
  asTabs(document.querySelector("#wrapper"));
  
  document.body.addEventListener("click", function(e) {
    if(e.target.nodeName == "BUTTON") {
      var elements = document.querySelector("#wrapper");
      var divs = document.getElementsByTagName("div");
      
      if(e.target.textContent == "one") {
        divs[1].className = "";
        divs[2].className = "hidden";
        divs[3].className = "hidden";
        e.target.className += " button-active";
      }
      else if(e.target.textContent == "two") {
        divs[2].className = "";
        divs[3].className = "hidden";
        divs[1].className = "hidden";
        e.target.className += " button-active";
      }
      else if(e.target.textContent == "three") {
        divs[3].className = "";
        divs[2].className = "hidden";
        divs[1].className = "hidden";
        e.target.className += " button-active";
      }
    }
  });
  
</script>
