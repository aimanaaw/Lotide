// const assertEqual = function(actual, expected) {
//   if (eqObjects(actual, expected)) {

//     console.log(`✅✅✅Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
//   } else {
//     const inspect = require('util').inspect;
//     console.log(`🛑🛑🛑Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
//   }
// };
const inspect = require('util').inspect;
const eqArrays = function(x,y) {
  if (x.length !== y.length) {
    // console.log("Not same lenght");
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      return false;
    }; 
    
  }
  return true;
  
}

const eqObjects = function(object1, object2) {
  let length1 = Object.keys(object1).length;
  let length2 = Object.keys(object2).length;
  if(length1 === length2) {
    for(let key in object1) {
      if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
        if (eqArrays(object1[key], object2[key]) === false) {
        // if (JSON.stringify(object1[key]) !== JSON.stringify(object2[key])) {
          return false;
        }
      } else {
        if(object1[key] !== object2[key]) {
          return false;
        } 
      }
      
    }  
  } else {
    return false
  }
  return true;
}

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {

    console.log(`✅✅✅Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  // // Implement me!

};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


assertObjectsEqual(cd, dc, true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);