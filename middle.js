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

const middle = function (arr) {
  let middleNum = [];
  if (arr.length === 1 || arr.length === 2) {
    return middleNum;
  } else if (arr.length % 2 === 0) {
    let mid1 = arr.length / 2;
    let mid2 = mid1 - 1;
    middleNum.push(arr[mid2]);
    middleNum.push(arr[mid1]);
    return middleNum;
  } else {
    let mid = Math.floor(arr.length / 2);
    middleNum.push(arr[mid]);
    return middleNum;
  }
}

// Test
assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
