const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (something) {
  something = something.split(" ").join("").split("");
  const letterCount = {};
  for (let letter of something) {
    if(letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  return letterCount;
}

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house", {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}));