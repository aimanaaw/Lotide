const eqArrays = function(x,y) {
  if (x.length !== y.length) {
    console.log(x);
    console.log(y);
    console.log("Not same length");
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      return false;
    }; 
  }
  return true; 
}

module.exports = eqArrays;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);


// eqArrays(["1", "2", "3"], ["1", "2", 3]);