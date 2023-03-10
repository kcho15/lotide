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

console.log(tail([1,2,3]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!