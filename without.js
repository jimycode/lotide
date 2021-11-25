//eqArrays function for test.
const eqArrays = function(array1,array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    }
  }
  return false;
};
//assertArrayEquals function for test.
const assertArrayEquals = function(firstArray,secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

//without function.
const without = function(array1, array2) {
  let filtered = [];
  for (const elements of array1) {
    if (!array2.includes(elements)) {
      filtered.push(elements);
    }
  }
  return filtered;
};
  
assertArrayEquals(without([1, 2, 3],[3]), [1,2]); // => true // takes out the middle array and then checks if the first array is equal to the last one.
assertArrayEquals(without([1, 2, '3'], [1,2,3]) ,[1]); // => false

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEquals(words, ["hello", "world", "lighthouse"]);