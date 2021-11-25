// asertEqual function for test.
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`); //used template literals
    } else {
      return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
// CountLetters function - The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
//

// the countletter function
const countLetters = function(string) {
    const countingResult = {};
    for (let letters of string) { 
          if (countingResult[letters]) { 
            countingResult[letters] += 1;
        }else if (letters !== " "){ // ignore the space, from stake overflow.
            countingResult[letters] = 1;
        }
    }
    return countingResult;
  }

  // Test case
console.log(countLetters("Lighthouse in the house"));
console.log(assertEqual((countLetters("LHL"))["L"], 2));
console.log(assertEqual((countLetters("lighthouse")) ["t"], 1));
console.log(assertEqual((countLetters("lighthouse again")) ["a"], 1));