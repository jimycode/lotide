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
    const countingResult = {}; // created an empty object to store the results of counted letters.
    for (let letters of string) {  // using for of loop to iterate over the given string.
          if (countingResult[letters]) { 
            countingResult[letters] += 1; // adding the count if the letter exists.
        }else if (letters !== " "){ // ignore the space, from stake overflow.
            countingResult[letters] = 1;
        }
    }
    return countingResult;
  }

  // Test case
console.log(countLetters("Lighthouse in the house")); // checks how many times a letter in the string.
console.log(assertEqual((countLetters("LHL"))["L"], 2)); // using the assertEqual to see if the result passes.
console.log(assertEqual((countLetters("lighthouse")) ["t"], 1));
console.log(assertEqual((countLetters("lighthouse again")) ["a"], 1));