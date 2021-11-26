//assertEqual function for test.

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`); //used template literals
    } else {
      return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  // eqArrays for test.
  const eqArrays = function(array1,array2) {
  
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };

  // Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

    const array1 = Object.keys(object1);
    const array2 = Object.keys(object2);
    
    if (array1.length !== array2.length) return false;  //First, use the Object.keys function on both objects and compare their lengths. If not equal, 
                              //there's no point in going further: return false
    for (let key of array1) {
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        return (eqArrays(object1[key], object2[key]));
      // If they are not arrays assumes the values are primitives and compare them
      } else if (object1[key] !== object2[key]) return false;
    }
    return true;
  };
  
  
  // Tests
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertEqual(eqObjects(ab, ba), true);
  
  const abc = { a: "1", b: "2", c: "3" };
  assertEqual(eqObjects(ab, abc), false);
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  assertEqual(eqObjects(cd, dc), true);
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertEqual(eqObjects(cd, cd2), false);

 /*  First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
As soon as there is not a match, we can return false
Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop) */