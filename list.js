function arrayToList(arr) {
  var list = {};
  for (var i = arr.length - 1; i >= 0; i--) {
    if (i == arr.length-1) {
      list.value = arr[i];
      list.rest = null;
    }
    else {
      var temp = list;
      list = {};
      list.value = arr[i];
      list.rest = temp;
    }
  }
  return list;
}

/*
function arrayToList(arr) {
  var list = {};
  for (var i = 0; i < arr.length; i++) {
   	if (i === 0) {
      list.value = arr[i];
      list.rest = null;
    }
    else {
      list.rest = nullObj(list);
      function nullObj(list) {
        if (list.rest == null) {
         	var rest = {};
          	rest.value = arr[i];
          	rest.rest = null;
          	return rest;
        }
        else return list.rest = nullObj(list.rest);
      }
    }
  }
  return list;
}
*/
var arr = [];
function listToArray(list) {
  for (var val in list) {
    if (typeof list[val] === 'object') {
    	listToArray(list[val]);
    } else {
      arr.push(list[val]);
    }
  }
  return arr;
}

function prepend(value, list) {
	var newlist = {};
  if (list === null) {
    newlist.value = value;
    newlist.rest = null;
  }
  else {
    newlist.value = value;
    newlist.rest = list;
  }
  return newlist;
}

function nth(list, n) {
  if (n === 0)
    return list.value;
  else return nth(list.rest, n-1);
}
console.log(arrayToList([10, 20])); 
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
