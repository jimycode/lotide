//eqArrays function for test.
const eqArrays = function(array1,array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    }
  }
  return false;
};
//assertArrayEquals function .
const assertArrayEquals = function(firstArray,secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log("This is equal");
  } else {
    console.log("Not equal");
  }
};
  
// Test Cases. which will take in two arrays and console.log an appropriate message to the console.
assertArrayEquals(["My name is Jim"],["My name is Jimy"]);
assertArrayEquals(["John"],["John"]);