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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
}

// Flatten function

const flatten = function(treatsArray) {
  let singleArray = [];
  for (let i = 0; i < treatsArray.length; i++) {
    if (Array.isArray(treatsArray[i])) {
      for (let j = 0; j < treatsArray[i][j]; j++) {
        singleArray.push(treatsArray[i][j]);
      }
    } else if (!Array.isArray[i]) {
      singleArray.push(treatsArray[i]);
    }
    
    }
    return singleArray;
  }


console.log(flatten([1, 2, [3, 4], 5, [6]]));