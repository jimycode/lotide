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

// letterPositions test. you have to make an object with the letters as keys and an array of each index the letter appears as values
//so for the string "hello" it would give you { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }

   const letterPositions = function(sentence) {
    const results = {};    // created an empty object.
for(let i = 0; i < sentence.length; i++){ // iterate over sentence.

 if (sentence[i] !== " ") { // ignore the spaces.
    if (results[sentence[i]]) {
      results[sentence[i]].push[i];  // if true then element will be pushed to the new created object,
    } else {results [sentence[i]] = [i];
    }

  } 

}
return results;

};
  //Test case.

 assertArrayEquals(letterPositions("hello").e,[1]); // confirms if the index of letter e is at 1. =>true
 assertArrayEquals(letterPositions("hello").l,[3]); // confirms if the index of letter is at 3. => false
 console.log(letterPositions("Im at LHL")) ; // prints the words of sentence as keys and their index as values in newly created object. 