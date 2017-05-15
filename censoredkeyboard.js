/*
Censored keyboard

Between 1928 and 2013, Turkish law forbade the use of the letters Q, W, and X in official documents. 
This was part of a wider initiative to stifle Kurdish culture—those letters occur in the language used
by Kurdish people but not in Istanbul Turkish.

As an exercise in doing ridiculous things with technology, I’m asking you to program a text field 
(an <input type="text"> tag) that these letters cannot be typed into.
*/

<input type="text">
<script>
  var field = document.querySelector("input");
  // Your code here.
  var timeout;
  field.addEventListener("keyup", function(event) {
    if(event.which == 81 || event.which == 87 || event.which == 88) {
      var string = field.value;
      trim(string);
    }
  });
  function trim(string) {
  	string = string.split('');
    string = string.slice(0, string.length - 1);
    string = string.join('');
    field.value = string;
  }
</script>
