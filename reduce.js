/* Author: Ashish Patel
 * Date: 14/04/2017
 */
 
var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
var flatten = arrays.reduce(function(flatarray, subarray) {
  return flatarray.concat(subarray);
});

console.log(flatten);
// → [1, 2, 3, 4, 5, 6]
