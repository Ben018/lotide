const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😊 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😒 Assertion Failed: ${actual} !== ${array2}`);
  }
};

const eqArrays = function (arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Function returns position of letter
const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // check that letter is not blank
    if (sentence[i] !== " ") {
      // check to see if letter is already in object
      if (results[sentence[i]]) {
        // if present push value
        results[sentence[i]].push(i);
      } else {
        // if not add key and position
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

// // Test
// // console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);

module.exports = letterPositions;