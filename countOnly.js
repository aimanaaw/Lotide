const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// Count only function                        Items to count
//                        firstNames, { "Jason": true, "Karima": true, "Fang": true }
const countOnly = function(allItems, itemsToCount) {
  const results = {}; // { Karl: 1, Salima: 2, Agouhanna: 1, Fang: 1, Kavith: 1, Jason: 1 }

  for (const item of allItems) { // item = "Salima"
  if (itemsToCount[item]) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }  
    }
  }
  return results;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
