// assertEqual function 
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(2,2); 

const countLetters = function(str) {
  const result = {};

  for (const letter of str) {
    if (letter === ' ') {  // Skip over whitespace with continue 
      continue; 
    }

    // If the letter key property of result is false, assign the key a value of 1 
    if (!result[letter]) {
      result[letter] = 1; 
    }
    // If the letter key property exists, add to existing value
    result[letter]++ ; 
  }

  return result; 
}

console.log(countLetters("LHL")) // expected { L: 2, H: 1 }
console.log(countLetters("lighthouse in the house"))
