const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
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

const letterPositions = function(sentence) {
  sentence = sentence.split("");
  const letterPositionObject = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if(letter === " ") {
      continue;

    };
    if(letterPositionObject[letter]) {
      letterPositionObject[letter].push(i);
      // console.log(sentence.indexOf(letter));
    } else letterPositionObject[letter] = [i];
    
    
  }
  console.log(letterPositionObject);
  return letterPositionObject;

}

// letterPositions("lighthouse in the house");

assertArraysEqual(letterPositions("hello").e,[1])