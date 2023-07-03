
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

const without = function (array1, array2) {
  let newArray = [];
  for (const element of array1) {
    if (!array2.includes(element)) {
      newArray.push(element);
    }
  }
  console.log(newArray);
};

// Test
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

module.exports = without;