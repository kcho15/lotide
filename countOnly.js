// assertEqual function 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✨✨✨ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(2,2); 

const countOnly = function(allItems, itemsToCount) {
const results = {}

for (const item of allItems) {
  console.log('item', item) 
  if (itemsToCount[item]) { 
    if (results[item]) { 
      results[item] += 1;  // results = { jason: 1} , {jason: 1, Fang: 2}
    } else {
      results[item] = 1; // On the first pass of the loop, since no names are "truthy" in results, 
    }                    // populate our results object and give each key (the names) a value of 1
  }                      // results = { jason: 1} , {jason: 1, Fang: 1}, adds a new key-value pair to an object
}
return results; 
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);