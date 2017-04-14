/* Author: Ashish Patel
 * Date: 14/04/2017
 */
 
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function agediff(person) {
  var mother = byName[person.mother];
  if (mother === null || mother === undefined) {
    return 0;
  }
  else return (person.born - mother.born);
}

var agearray = [];
ancestry.forEach(function(person) {
  var agedifference = agediff(person);
  if(agedifference !== 0) {
  	agearray.push(agediff(person));
	}
});
console.log(agearray);
console.log(average(agearray).toFixed(1));

console.log(byName["Carolus Haverbeke"]);

// → 31.2
