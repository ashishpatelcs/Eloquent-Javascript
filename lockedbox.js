/*
*/

function withBoxUnlocked(body) {
  try {
    var status = box.locked;
    box.unlock();
    body;
  } finally {
    if (status) box.lock();
  }  
}

box.locked = false;

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(box.locked);
// → true
