// Requires
const assert = require('chai').assert;
const {assertObjectsEqual} = require('../assertObjectsEqual')
const {countLetters} = require('../countLetters');

// Test

describe("#countLetters", () => {

  it("returns object with letters as keys and number of times they appear in a given string", () => {
    assertObjectsEqual(countLetters("LHL", { L: 2, H: 1 })); 
  });
  
});

// console.log(countLetters("LHL")) // expected { L: 2, H: 1 }
// console.log(countLetters("lighthouse in the house"))