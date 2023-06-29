// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (actual) {
  if (actual !== null) {
    return actual[0];
  } else {
    return undefined;
  }
};

// TEST CODE

assertEqual(tail([5, 6, 7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
