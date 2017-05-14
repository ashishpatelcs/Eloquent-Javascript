/*
Fixing scope

Currently, the only way to assign a variable a value is define. This construct acts as a way
both to define new variables and to give existing ones a new value.

This ambiguity causes a problem. When you try to give a nonlocal variable a new value, you will
end up defining a local one with the same name instead. (Some languages work like this by design,
but I’ve always found it a silly way to handle scope.)

Add a special form set, similar to define, which gives a variable a new value, updating the
variable in an outer scope if it doesn’t already exist in the inner scope. If the variable is
not defined at all, throw a ReferenceError (which is another standard error type).

The technique of representing scopes as simple objects, which has made things convenient so far,
will get in your way a little at this point. You might want to use the Object.getPrototypeOf 
function, which returns the prototype of an object. Also remember that scopes do not derive from 
Object.prototype, so if you want to call hasOwnProperty on them, you have to use this clumsy expression:

Object.prototype.hasOwnProperty.call(scope, name);

This fetches the hasOwnProperty method from the Object prototype and then calls it on a scope object.
*/

specialForms["set"] = function(args, env) {
  // Your code here.
  var temp = env;
  var count = 0, flag = 0;
  while(temp!== null) {
    if (count == 10) break;
    else if(Object.prototype.hasOwnProperty.call(temp, args[0].name)) {
      flag = 1;
      break;
    }
   	else { temp = Object.getPrototypeOf(temp); count += 1; }
  }
  if (!flag) {
    throw new ReferenceError("variable not defined!");
  } else {
    temp[args[0].name] = env.val;
  }
};

run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError
