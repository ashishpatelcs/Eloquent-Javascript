/*
Design an interface that abstracts iteration over a collection of values. An object that provides this interface
represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate
over the sequence, looking at the element values it is made up of and having some way to find out when the end of
the sequence is reached.

When you have specified your interface, try to write a function logFive that takes a sequence object and calls
console.log on its first five elements—or fewer, if the sequence has fewer than five elements.

Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface
you designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to arguments to its constructor) instead.
*/

function ArraySeq(arr) {
	this.arr = arr,
    this.length = function() {
    	if(arr.length < 5) return arr.length;
        else return 5;
    }
}
ArraySeq.prototype.log = function() {
  	var len = this.length();
	for(var i = 0; i < len; i++) {
    	console.log(this.arr[i]);
    }
}

function RangeSeq(start, end) {
  	this.start = start;
  	this.end = end;
	this.length = function() {
      	if(end - start < 5) return end - start;
      	else return 5;
    }
}

RangeSeq.prototype.log = function() {
  	var start = this.start;
  	var end = start + this.length();
	for (var j = start; j < end; j++) {
      console.log(j);
    }
}

function logFive(seq) {
  if(seq instanceof ArraySeq) {
    seq.log();
  }
  else if (seq instanceof RangeSeq) {
    seq.log();
  }
  else console.log("Oops");
}


logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
