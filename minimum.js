/*
Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument.
We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
*/

// Your code here.
function min(numx, numy) {
  return numx < numy ? numx : numy;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
