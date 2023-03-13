const assertEqual = require('./assertEqual');

const tail = function(input) {
  if (input.length === 0) {
    return [];
  }
  return input.slice(1);
};

module.exports = {tail}; 