const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
};

// const findKey = function(object, callback) {
    
//   for (let item in object) {           
//     if (callback(object[item])) {  // calling the callback function with argument object[item] to access the object
//       return item;                     
//     }
//   };
// };

// Day 5 Code review, revised version

const findKey = function(obj, callback) {

  for (const key in obj) {
    const value = obj[key]; // Assign each key to a new variable for readability an ease of use 

    if (callback(value)) {
      return key; 
    }
  }
}

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