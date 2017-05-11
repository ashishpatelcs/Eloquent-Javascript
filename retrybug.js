/*
Say you have a function primitiveMultiply that, in 50 percent of cases, multiplies two numbers,
and in the other 50 percent, raises an exception of type MultiplicatorUnitFailure. Write a function
that wraps this clunky function and just keeps trying until a call succeeds, after which it returns
the result.

Make sure you handle only the exceptions you are trying to handle.
*/

function MultiplicatorUnitFailure(message) {
  this.message = message;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorError";

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure("Muliplication Failure!");
}

function reliableMultiply(a, b) {
  // Your code here.
  for(;;) {
    try {
      var result = primitiveMultiply(a, b);
      return result;
      break;
    }
    catch(e) {
      console.log("Error: " + e);
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64
