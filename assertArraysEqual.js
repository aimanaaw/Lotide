const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
}



const eqArrays = function(x,y) {
  if (x.length !== y.length) {
    console.log("Not same lenght");
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      return false;
    }; 
    
  }
  return true;

}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);


// eqArrays(["1", "2", "3"], ["1", "2", 3]);