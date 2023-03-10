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

// takeUntil accepts an array and the callback "predicate" which returns a slice of the array with elements taken from the beginning 
// function keeps going until the callback/prediate returns a truthy value 
// callback function should only be provided one value: the item in the array 

const takeUntil = function(array, callback) {

  const results = [];
  for (let item of array) {
    if (!callback(item)) {        // calling the callback function with argument "item" 
      results.push(item)          // if falsey, continue to push the item to resultsif (callback(item)) {
    } else {
      return results;
    }
  };
  return results;
};
   
//Tests

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ])
// Expected Output
// [ 1, 2, 5, 7, 2 ]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ])

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]