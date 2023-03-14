const assertEqual = require('./assertEqual');

// Returns all the elements of an array except the first element 
const tail = function(input) {
  if (input.length === 0) {
    return [];
  }
  return input.slice(1);
};

module.exports = {tail}; 