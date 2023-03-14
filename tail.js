const assertEqual = require('./assertEqual');

const tail = function(input) {
  if (input.length === 0) {
    return [];
  }
  return input.slice(1);
};

const words = ["hello", "darkness" , "my old friend"]
const nums = [1, 2, 3, 4, 5]
console.log(tail(words)); 
console.log(tail(nums)); 

module.exports = tail; 