const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const {eqArrays} = require('../eqArrays')

// // Test 
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); 

describe("#eqArrays", () => {

  it("returns true for [1, 2, 3] equals [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
  });

  it("returns false for [1, 2, 3] equals [1, 2, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); 
  });

});