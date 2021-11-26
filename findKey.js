//assertEqual function to check if both values are true or false. for test

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`); //used template literals
    } else {
      return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };


  // which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. 
  //If no key is found, then it should return undefined.

  // findKey function.
  const findKey = function(object, callback) {
    for (let key in object) {
      if (callback(object[key])) return key;
    }
  };

  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"

  let object = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  let actual = findKey(object, x => x.stars === 2);
  let expected = "noma";
  assertEqual(actual, expected);

let actual2 = findKey(object, x => x.stars === 1);
let expected2 = "elBulli";
assertEqual(actual2, expected2);