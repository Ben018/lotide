// Function returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const objectKeyArr1 = Object.keys(object1);
  const objectKeyArr2 = Object.keys(object2);
  // Check if length is same
  if (objectKeyArr1.length !== objectKeyArr2.length) {
    return false;
  }
  for (const key of objectKeyArr1) {
    // If both values are arrays pass them to eqArrays
    if (Array.isArray(object1[key]) & Array.isArray(object2[key])) {
      return (eqArrays(object1[key], object2[key]));
      // If not compare as primitive
    } else if ((object1[key] !== object2[key])) {
      return false;
    }
  }
  return true;
};

// Function to compare objects
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😊 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😒 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }), true; // => should PASS
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 3, c: 3 }), false; // => should FAIL
assertObjectsEqual({ a: 1 }, { a: 1, b: 3, c: 3 }), false; // => should FAIL
