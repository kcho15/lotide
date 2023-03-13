const {assertArraysEqual} = require('./assertArraysEqual'); 

const middle = function (array) {
  // Arrays with only 1 element and 2 elements should return an empty array
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length === 1 || array.length === 2) {
      return result;
    }
    // Even case arrays 
    if (array.length % 2 === 0) {
      // First element of middle pair 
      result.push(array[Math.floor((array.length - 1) / 2)]);
      // Second element of middle pair 
      result.push(array[Math.floor(array.length / 2)]);
      return result; 
    }

    // Odd case arrays 
    result.push(array[Math.floor(array.length / 2)]);
    return result; 
  }
}

// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

// const testArray1 = [3, 4, 6, 7, 9];
// const testArray2 = [3, 4, 6, 7, 9, 10];
// assertArraysEqual(middle(testArray1), [6]); // expected output: "Assertion Passed: [6] === [6]" 
// assertArraysEqual(middle(testArray2), [6]); // expected output: "Assertion Failed: [6, 7] !== [6]" 

module.exports = {middle};  