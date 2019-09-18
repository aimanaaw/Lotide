const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


const findKeyByValue = function (someObject, someValue) {
  for (let key in someObject) {
    
    if (someObject[key] === someValue) {
      return key;
    }
  }
  return undefined;
}

console.log('Result:', findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);