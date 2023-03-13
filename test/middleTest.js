// Requires
const {assertArraysEqual} = require('../assertArraysEqual'); 
const {middle} = require('../middle');

// Tests
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

const testArray1 = [3, 4, 6, 7, 9];
const testArray2 = [3, 4, 6, 7, 9, 10];
assertArraysEqual(middle(testArray1), [6]); // expected output: "Assertion Passed: [6] === [6]" 
assertArraysEqual(middle(testArray2), [6]); // expected output: "Assertion Failed: [6, 7] !== [6]" 