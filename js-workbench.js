/*
Build an interface that allows people to type and run pieces of JavaScript code.

Put a button next to a <textarea> field, which, when pressed, uses the Function constructor to wrap the text
in a function and call it. Convert the return value of the function, or any error it raised, to a string and 
display it after the text field.
*/

<textarea id="code">return "hi";</textarea>
<button id="button">Run</button>
<pre id="output"></pre>

<script>
  var run = document.querySelector("button");
  run.addEventListener("click", function() {
    var code = document.querySelector("textarea");
    var func = new Function("", code.value);
    console.log(func());
  });
</script>
