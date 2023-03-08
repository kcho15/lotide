// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function that accepts to arrays, returns true or false, based on a perfect match 
const eqArrays = function(array1, array2) {
  // Check if array lengths are the same or not
  if (array1.length !== array2.length) {
    return false; 
  }
  // Check each element of both arrays 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
    return true
  }
}

// Test 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);