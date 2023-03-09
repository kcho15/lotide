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

const assertArraysEqual = function(array1, array2) {
  // Check if the function eqArray was false
  if (!eqArrays(array1, array2)) {
    console.log(`💀💀💀 Assertion Failed : ${array1} !== ${array2}`); 
    return; 
  }
  console.log(`✨✨✨ Assertion Passed : ${array1} === ${array2}`);
}

// assertArraysEqual([1,2,3],[1,2,3]); // output expected: pass
// assertArraysEqual([1,2,3,4],[1,2,3,4]); // output expected: pass 
// assertArraysEqual([1,2,3],[3,2,1]); // output expected: fail 
// assertArraysEqual([1,2,3],[1,2,3,4]); // output expected: fail 

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") { // Skip whitespace as a key
      let letterKey = sentence[i] // Each element of sentence will form a key 
      // Check if the value exists already first
      if (!results[letterKey]) {
        results[letterKey] = [i] // Add current index position to object "results" as value to letter key 
      } else {
        results[letterKey].push(i); // Push the index to the existing array for that letter key   
      }
    }
  }  
  return results;
}; 

console.log(letterPositions("lighthouse in the house")); 

assertArraysEqual(letterPositions("hello").e, [1]); 

letterPositions("lighthouse in the house") 
// expected output: 
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }