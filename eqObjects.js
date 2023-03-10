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
  if (actual === expected) {
    console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(2,2); 

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

// Tests
const shirt1 = { color: "red", size: "medium" };
const shirt2 = { size: "medium", color: "red" };
const shirt3 = { size: "medium", color: "red", sleeveLength: "long" };
const shirt4 = { colors: ["red", "blue"], size: "medium" };
const shirt5 = { size: "medium", colors: ["red", "blue"] };
const shirt6 = { size: "medium", colors: ["green", "blue"], sleeveLength: "long" }; // 
const shirt7 = { size: "medium", colors: ["red", "blue"] }; // same as shirt 4 

assertEqual(eqObjects(shirt1 , shirt2), true); // => true
assertEqual(eqObjects(shirt1, shirt3), false); // => false
assertEqual(eqObjects(shirt4  , shirt5), true); // => true
assertEqual(eqObjects(shirt3  , shirt6), true); // => true **shirt3 and shirt6 have different values for colors?? 
assertEqual(eqObjects(shirt1  , shirt7), true); // => true
