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
    

// takeUntil function.which will keep collecting items from a provided array until
// the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
    let newArray = [];
    for (let elements of array) {
      if (!callback(elements)) {
        newArray.push(elements);
      } else {
    
      }
    }
    return newArray;
  };

  //lets test output
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// expected output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

//testing 

const data3 = ["I", "will", "test", "this", ",", "I", "will", ",", "test", "that"];
const results3 = takeUntil(data3, x => x === ',');

assertArrayEquals(results1, data1.splice(0, 5));
assertArrayEquals(results2, data2.splice(0, 4));
