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

//Function return a slice of the array with elements taken from the beginning - until it reachers callBack parameter
const takeUntil = function (array, callback) {
  const newArray = [];
  for (const element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;
}

// Test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2,]); //Pass

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); //Pass

module.exports = takeUntil;