/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1); */

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

const without = function(mainArray,withOutOne) {
  let theNewArray = []; // new array to push to.
  for (let i = 0; i < mainArray.length; i++) { // iterate over main array
    if (!(withOutOne.includes(mainArray[i]))) {
      theNewArray.push(mainArray[i]);
    }
  }
  return theNewArray;
};
  
  
/* assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1); */
assertArrayEquals(without([1, 2, 3],[3]), [1,2]); // => true // takes out the middle array and then checks if the first array is equal to the last one.
assertArrayEquals(without([1, 2, '3'], [1,2,3]) ,[1]); // => false

  
/* assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false 
 */
/* assertArrayEquals(["My name is Jim"],["My name is Jimy"]);
assertArrayEquals(["John"],["John"]); */

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEquals(words, ["hello", "world", "lighthouse"]);