const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
    
const eqArrays = function(array1,array2) {    
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    }
  }
  return false;
};

const assertArrayEquals = function(firstSentene,secondSentence) {
  if (eqArrays(firstSentene, secondSentence)) {
    console.log("Absolutely equal");
  } else {
    console.log("Absolutely not equal");
  }
};
  
  
/*   assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1,1);
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => should PASS
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false
  
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false */

assertArrayEquals(["My name is Jim"],["My name is Jimy"]);
assertArrayEquals(["John"],["John"]);