const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  
  //const arr = Object.entries(object) // Would I want to convert to an array?
  
  for (let item in object) {           
    if (callback(object[item])) {  // calling the callback function with argument object[item] to access the object
      return item;                     
    }
  };
};

// Tests
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma") // expected output: passed! 