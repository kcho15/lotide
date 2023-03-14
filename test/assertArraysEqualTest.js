const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const {eqArrays} = require('../eqArrays')

// Tests
assertArraysEqual([1,2,3],[1,2,3]); // output expected: pass
assertArraysEqual([1,2,3,4],[1,2,3,4]); // output expected: pass 
assertArraysEqual([1,2,3],[3,2,1]); // output expected: fail 
assertArraysEqual([1,2,3],[1,2,3,4]); // output expected: fail 

describe("#assertArraysEqual", () => {

  it("returns assertion passed for [1,2,3] equals [1,2,3]", () => {
    assert.deepEqual(assertArraysEqual([1,2,3],[1,2,3])); 
  });

  it("returns assertion failed for [1,2,3] equals [3,2,1]", () => {
    assert.deepEqual(assertArraysEqual([1,2,3],[3,2,1]));
  });

}); 