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
    console.log('💀💀💀 Assertion Failed'); 
    return; 
  }
  console.log('✨✨✨ Assertion Passed');
}

assertArraysEqual([1,2,3],[1,2,3]); // output expected: pass
assertArraysEqual([1,2,3,4],[1,2,3,4]); // output expected: pass 
assertArraysEqual([1,2,3],[3,2,1]); // output expected: fail 
assertArraysEqual([1,2,3],[1,2,3,4]); // output expected: fail 