//AssertEqual function we are using for the tests
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Tail function. which returns the "tail" of an array: everything except for the first item (head) of the provided array.
const tail = function(input) {
  return input.slice(1);
};

//Test case
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test case which returns the "tail" of an array: everything except for the first item (head) of the provided array.
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const emptyArray = [];
tail(emptyArray); // no need to capture the return value since we are not checking it
assertEqual(emptyArray, []); // original array should still have 3 elements!