// assertEqual function 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(2,2); 

const countLetters = function(sentence) {
  // function takes a string
  let onlyLetters = sentence.replace(/ /g,'') // Delete whitespace globally 
  let letterCount = {};
  for (let i = 0; i < onlyLetters.length; i++) {
    let letterKey = onlyLetters[i];  
        
    if (!letterCount[letterKey]) { // If the letterKey property of letterCount is false, assign the key a value of 1
      letterCount[letterKey] = 1;
    } else {
      letterCount[letterKey]++; // If the letterKey property exists, add to existing value 
    }
  }
  return letterCount;  
} 

console.log(countLetters("LHL")) // expected { L: 2, H: 1 }
console.log(countLetters("lighthouse in the house"))
