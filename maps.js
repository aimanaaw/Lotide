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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  
  return results;
}
// const results1 = map(words, word => word[0]);
// console.log(results1);


const testArray1 = ["g", "c", "t", "m", "t"];
const testArray2 = ["a", "c", "v", "m", "x"];
const testArray3 = ["1", "2", "3", "4", "5"];

assertEqual(map(words, word => word[0]), testArray1);
assertEqual(map(words, word => word[0]), testArray2);
assertEqual(map(words, word => word[0]), testArray3);