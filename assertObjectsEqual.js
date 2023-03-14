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
  }
  return true;
}

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
};

const eqObjects = function(object1, object2) {

  // Must have same number of keys, search the length of the keys after converting them into an array 
  const objectKeysArr1 = Object.keys(object1) 
  const objectKeysArr2 = Object.keys(object2)
  
  if (objectKeysArr1.length !== objectKeysArr2.length) {
    return false;
  }

  for (const keys of objectKeysArr1) {
    if (!Array.isArray(objectKeysArr1, objectKeysArr2) && object1[keys] !== object2[keys]) {
      return false; // Check if the arrays are, in fact, an array. Check if their key values are the same 
    }
    if (Array.isArray(object1[keys]) && !eqArrays(object1[keys], object2[keys])) {
      return false; // If the key value is an array and eqArrays is false when called to compare the array key values for both objects, return false
    }
  } 
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (!eqObjects(actual, expected)) {
    console.log(`💀💀💀 Assertion Failed : ${inspect(actual)} !== ${inspect(expected)}`);
    return;
  }
  console.log(`✨✨✨ Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`);
};

// Test
// const thing1 = { name: "foo" }
// const thing2 = { name: "foo" }
// assertObjectsEqual(thing1, thing2) 
