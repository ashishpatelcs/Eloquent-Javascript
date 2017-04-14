/* Author: Ashish Patel
 * Date: 14/04/2017
 */

function every(array, predicate) {
  var count = 0;
  array.forEach(function(num) {
  	if(predicate(num)) {
      count += 1;
    }
  });
  if (count == array.length) return true;
  else return false;
}

function some(array, predicate) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if(predicate(array[i])) {
      return true;
    }
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
