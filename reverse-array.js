/*
Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which
its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array that has the
same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument in order to reverse its elements. 
Neither may use the standard reverse method.
*/

function reverseArray(arr) {
  var newarr = [];
  for (var i = arr.length-1; i >= 0; i--) {
    newarr.push(arr[i]);
  }
  return newarr;
}

function reverseArrayInPlace(arr) {
  var len = arr.length;
  var mid = arr.length / 2;
  console.log(mid);
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    if (i < mid) {
      arr[i] = arr[len-1];
      arr[len-1] = temp;
      len--;
    }
    if (i == mid) {
      break;
    }
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
