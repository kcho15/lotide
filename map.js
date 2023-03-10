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

// Our map function will take in two arguments, 1. an array to map 2. a callback function
// the map function will return a new array based on the result of the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item)); 
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---'); 
  }
  return results; 
}; 



//Tests
const results1 = map(words, word => word[0]);
console.log(results1); 
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // expected output: pass 
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 'x']); // expected output: fail 

const results2 = map(words, word => word.length); 
assertArraysEqual(results2, [6, 7, 2, 5, 3]); // expected output: pass 
assertArraysEqual(results2, [6, 7, 2, 5, 1]); // expected output: fail

const results3 = map(words, word => word.toUpperCase()); // expected output: pass
assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']); // expected output: pass
assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'tom']); // expected output: fail



