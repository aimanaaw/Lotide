const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array.shift();
}

console.log(head([5,4,7]))

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");