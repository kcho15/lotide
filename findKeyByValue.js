const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (objectInput, value) {
  // Loop through the object, return the first key which contains the given value
  // If no key is found, return undefined
 
  const objectKeys = Object.keys(objectInput); 
  // console.log(objectInput)
  for (const genre of objectKeys) {
    
    if (value === objectInput[genre]) { // Accessing the value of the object using the key "genre" 
      return genre;  
    } 
  }
  return undefined;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // expected output, return the key "drama" 
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 