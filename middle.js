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


// Middle function
const middle = function(array) {
  let middleArray = [];
  const lowerMiddleIndex = (array.length / 2) - 1;
  const upperMiddleIndex = (array.length / 2) + 1;
  if (array.length <=2) {
    return middleArray;
  }
  if (array.length % 2 === 0) {
    middleArray = array.slice(lowerMiddleIndex, upperMiddleIndex);
  } else {
    middleArray = array[(array.length - 1) / 2];
  }
  return middleArray;
}

// console.log(middle([1, 2, 3, 4, 5, 6]));

// Test case

assertArraysEqual(middle([1,2]), []);

assertArraysEqual(middle([1,2,3,4]), []);