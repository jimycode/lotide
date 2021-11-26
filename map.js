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
      console.log(`✅✅✅Assertion Passed: ${firstArray} === ${secondArray}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${firstArray} !== ${secondArray}`);
    }
  };



const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback)  {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
  }

const results1 = map(words, word => word[0]); // takes the 0 index
console.log(results1);

const listOne = ["ground", "control", "to", "major", "tom"];
const listTwo = ["ground", "control", "to", "major", "tom", "bowie"];
const listThree= ["ground", "control", "to", "major", "bob"];
const listFour= ["ground", "control", "to", "major", "bob"];
assertArrayEquals(map(listOne, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArrayEquals(map(listTwo, word => word[1]), [ 'g', 'c', 't', 'm', 't' ]);
assertArrayEquals(map(listThree, word => word.length), [ 'g', 'c', 't', 'm', 't' ]);
assertArrayEquals(map(listThree, word => word[""]), [ 'g', 'c', 't', 'm', 't' ]);