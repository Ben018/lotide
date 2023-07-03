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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😊 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😒 Assertion Failed: ${actual} !== ${array2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

// Test
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

module.exports = map;