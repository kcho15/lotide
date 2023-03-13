const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
  console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(2,2);

const tail = function(input) {
  if (input.length === 0) {
    return [];
  }
  return input.slice(1);
};

module.exports = {tail}; 