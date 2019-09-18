const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

eqObjects(cd, dc)
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);