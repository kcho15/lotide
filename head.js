const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(2,2); 

const head = function(input) {
  let result = input[0];
  return result; 
}

assertEqual(head([]), 5);  
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");