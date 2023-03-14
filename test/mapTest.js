// Requires
const assert = require('chai').assert;
const {map} = require('../map');

//Tests

// Our map function will take in two arguments, 1. an array to map 2. a callback function
// the map function will return a new array based on the result of the callback function

const words = ["ground", "control", "to", "major", "tom"];
// const results = map(words, word => word.toUpperCase()); // expected output: pass
// assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']); // expected output: pass
// assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'tom']); // expected output: fail

describe("#map", () => {

  it("returns new array based on callback function and input array", () => {
    assert.deepEqual(map(words, word => word.toUpperCase()), ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']); 
  });
  
});

