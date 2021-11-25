//assertEqual function to check if both values are true or false.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`); //used template literals
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases.
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);