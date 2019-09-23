// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

const assert = require('chai').assert;
const tail   = require('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns the tail end of an array", () => {
    assert.deepEqual((result[0]), "Lighthouse");
  });
  it("returns the tail end of an array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });
});