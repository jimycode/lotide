  // Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// eqObjects for test.
const eqObjects = function(object1, object2) {

    const array1 = Object.keys(object1);
    const array2 = Object.keys(object2);
    
    if (array1.length !== array2.length) return false;  //First, use the Object.keys function on both objects and compare their lengths. If not equal, 
                              //there's no point in going further: return false
    for (let key of array1) {
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) { // Array.isArray() checks if objects is an Array.
        return (eqArrays(object1[key], object2[key]));  // If they are not arrays assumes the values are primitives and compare them
      
      } else if (object1[key] !== object2[key]) return false;
    }
    return true;
  };
  
//assdertObjectsEqual Function.which will take in two objects
// and console.log an appropriate message to the console.

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;  //this is a library,Inspects the specified object and returns the object as a string
    if (!eqObjects(actual, expected)) 
        return(console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
    return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
  };
  
  // Tests

  //console.log(`Example label: ${inspect(actual)}`);
  
  console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }));
  console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2" }));
