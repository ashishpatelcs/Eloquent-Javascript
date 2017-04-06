/*
Deep comparison

The == operator compares objects by identity. But sometimes, you would prefer
to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they
are the same value or are objects with the same properties whose values are also 
equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that)
or by looking at their properties, you can use the typeof operator. If it produces "object"
for both values, you should do a deep comparison. But you have to take one silly exception
into account: by a historical accident, typeof null also produces "object".
*/

function deepEqual(val_a, val_b) {
  var found = 1;
  if (typeof val_a === 'object' || typeof val_b === 'object') {
    if (val_a !== null || val_b !== null) {
      for (var val in val_b) {
        //console.log(val in val_b);
        //console.log(typeof val_b[val], typeof val_a[val]);
        if (typeof val_b[val] === 'object') {
          for (var v in val_b[val]) {
            if (val_a[v] !== val_b[v]) found = 0;
          }
        } else {
          if (val_a[val] !== val_b[val]) found = 0;
        }
      }
    }
  }
  if (found) return true; else return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
