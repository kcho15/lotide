const eqArrays = function(array1, array2) {
  // Check the length of each array, then check each element of both arrays 
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  // Check if the function eqArray was false
  if (!eqArrays(array1, array2)) {
    console.log(`💀💀💀 Assertion Failed : ${array1} !== ${array2}`); 
    return; 
  }
  console.log(`✨✨✨ Assertion Passed : ${array1} !== ${array2}`);
}

// assertArraysEqual([1,2,3],[1,2,3]); // output expected: pass
// assertArraysEqual([1,2,3,4],[1,2,3,4]); // output expected: pass 
// assertArraysEqual([1,2,3],[3,2,1]); // output expected: fail 
// assertArraysEqual([1,2,3],[1,2,3,4]); // output expected: fail 


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