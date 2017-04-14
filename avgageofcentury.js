/* Author: Ashish Patel
 * Date: 14/04/2017
 */
 
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function century(year) {
	return Math.ceil(year / 100);
}

var avglife = {};
ancestry.forEach(function(person) {
  var cent = century(person.died);
  var age = person.died - person.born;
  if(avglife[cent] === null || avglife[cent] === undefined) {
  	avglife[cent] = [];
    avglife[cent].push(age);
  }
  else {
    //avglife[cent] = (avglife[cent] + age) / 2;
    avglife[cent].push(age);
  }
});

for(cent in avglife) {
  avglife[cent] = Math.round(average(avglife[cent]) * 10) / 10;
}

console.log(avglife);

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
