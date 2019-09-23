// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// Test Cases
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
// assertArraysEqual(middle(([1, 2, 3, 4, 5, 6])), [3, 4]);

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns the middle value if the array has an odd number of elements and the middle 2 values if the array has an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns the middle value if the array has an odd number of elements and the middle 2 values if the array has an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });
});