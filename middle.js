const assertArraysEqual = require('./assertArraysEqual'); 

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

module.exports = {middle};  