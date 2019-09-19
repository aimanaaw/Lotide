const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, someValue) {
  let result = [];
  for (let y of array) {
    if (someValue(y)) {
      return result;
    } else {
      result.push(y);
    }
  } 
}

const results1 = takeUntil(data1, x => x < 0);

// console.log(results1);

assertEqual(results1, [1, 0, 5, 7, 2]);