const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

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

module.exports = middle;