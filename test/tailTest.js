const assertEqual = require('../assertEqual');
const {tail} = require('../tail');

const words = ["hello", "darkness" , "my old friend"]
assertEqual(words.length, 3); // original array should still have 3 elements!