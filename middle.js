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
// middle function . which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  let middleElement = [];
  if (array.length === 1 || array.length === 2) {
    return middleElement;
  } else if (array.length % 2 === 0) {
    let mid1 = array.length / 2;
    let mid2 = mid1 - 1;
    middleElement.push(array[mid2]);
    middleElement.push(array[mid1]);
    return middleElement;
  } else {
    let mid = Math.floor(array.length / 2);
    middleElement.push(array[mid]);
    return middleElement;
  }
};
//or arrays with one or two elements, there is no middle. Return an empty array.
assertArrayEquals(middle([1])); // => []
assertArrayEquals(middle([1, 2])); // => []
//For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArrayEquals(middle([1, 2, 3]), [2]); // => [2]
assertArrayEquals(middle([1, 2, 3, 4, 5]), [3]); // => [3]
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArrayEquals(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArrayEquals(middle([1, 2, 3, 4, 5, 6, 7,8]), [4,5]); // => [4, 5]
