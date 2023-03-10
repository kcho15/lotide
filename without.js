const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
};

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
  console.log(`✨✨✨ Assertion Passed : ${array1} === ${array2}`);
}

// Function 'without' returns a subset of a given array, removing unwanted elements 
const without = function(source, itemsToRemove) {
  let result = []
  for (let i = 0; i < source.length; i++) {
    // Need to check if the current element in source is not included in itemsToRemove, if true, push elements to result
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]); 
    }
  }
  return result; 
} 

// Tests
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"] 