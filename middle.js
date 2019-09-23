
// Middle function
const middle = function(array) {
  let middleArray = [];
  const lowerMiddleIndex = (array.length / 2) - 1;
  const upperMiddleIndex = (array.length / 2);
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0 && array.length > 2) {
    let value1 = array[lowerMiddleIndex];
    let value2 = array[upperMiddleIndex]
    middleArray.push(value1);
    middleArray.push(value2);
    return middleArray;
  } else {
    let centreValue = array[(array.length - 1) / 2];
    middleArray.push(centreValue);
    return middleArray;
  }
}

module.exports = middle;


// Test case
// assertArraysEqual(middle([1,2]), []);

// assertArraysEqual(middle([1,2,3,4]), []);